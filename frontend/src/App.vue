<!-- frontend/src/App.vue -->
<template>
  <div class="live-container">
    <!-- 加载状态 -->
    <div v-if="loading" class="loading-screen">
      <div class="loader"></div>
      <p>加载直播间...</p>
    </div>
    
    <!-- 错误状态 -->
    <div v-else-if="error" class="error-screen">
      <h3>加载失败</h3>
      <p>{{ errorMessage }}</p>
      <button @click="retry">重试</button>
    </div>
    
    <!-- 内容渲染 -->
    <template v-else>
      <MobileLayout v-if="isMobile" :video-data="currentVideo" />
      <DesktopLayout v-else :video-data="currentVideo" />
    </template>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useDevice } from './utils/DeviceAdaptation.js'
import MobileLayout from './components/MobileLayout.vue'
import DesktopLayout from './components/DesktopLayout.vue'

const { isMobile } = useDevice()
const currentVideo = ref(null)
const loading = ref(true)
const error = ref(false)
const errorMessage = ref('')

// 自动响应设备变化
const deviceType = computed(() => isMobile.value ? 'mobile' : 'desktop')

// 获取视频数据
const fetchVideo = async () => {
  loading.value = true
  error.value = false
  try {
    // 使用正确的API路径 - 确保与WAMP配置匹配
    const apiUrl = 'http://localhost/live-demo/backend/api/video.php';
    
    const response = await fetch(apiUrl);
    
    // 先获取响应文本，用于调试
    const responseText = await response.text();
    console.log('API原始响应:', responseText);
    
    // 检查是否是HTML响应（错误情况）
    if (responseText.trim().startsWith('<!DOCTYPE') || 
        responseText.includes('<html>')) {
      throw new Error(`API返回HTML页面: ${responseText.substring(0, 100)}...`);
    }
    
    // 尝试解析JSON
    const data = JSON.parse(responseText);
    
    // 检查API返回的code
    if (data.code !== 0) {
      throw new Error(`API错误: ${data.msg}`);
    }
    
    // 根据设备类型获取对应视频
    const videoKey = isMobile.value ? 'mobile' : 'desktop';
    currentVideo.value = {
      url: data.data[videoKey],
      meta: { source_device: videoKey }
    };
    
    console.log('当前视频URL:', currentVideo.value.url);
    
  } catch (err) {
    console.error('加载失败:', err);
    error.value = true;
    errorMessage.value = err.message || '未知错误';
    
    // 使用直接视频路径作为备用方案
    currentVideo.value = {
      url: '/live-demo/backend/videos/desktop-demo.mp4',
      meta: { source_device: 'desktop' }
    };
  } finally {
    loading.value = false;
  }
}
// 初始加载
fetchVideo()

// 设备变化时重新加载
watch(deviceType, (newType) => {
  console.log(`设备类型变化: ${newType}`)
  fetchVideo()
})

// 重试函数
const retry = () => fetchVideo()
</script>

<style scoped>
.loading-screen, .error-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>