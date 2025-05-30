<template>
  <div class="video-container" :style="containerStyle">
    <video 
      ref="videoEl"
      :src="videoData.url"
      :style="videoStyle"
      @loadedmetadata="handleVideoMeta"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useDevice } from '../utils/DeviceAdaptation.js' 
const { isMobile } = useDevice() 

const props = defineProps({
  videoData: {
    type: Object,
    required: true
  }
})

const videoEl = ref(null)
const videoMeta = ref({ width: 0, height: 0 })

const handleVideoMeta = () => {
  videoMeta.value = {
    width: videoEl.value.videoWidth,
    height: videoEl.value.videoHeight
  }
}

const aspectRatio = computed(() => {
  const [w, h] = props.videoData.meta.resolution.split('x').map(Number)
  return h / w
})

// 根据设备显示视频
const displayStrategy = computed(() => {
  const isVerticalVideo = videoMeta.value.height > videoMeta.value.width
  const needRotation = props.videoData.meta.source_device === 'mobile' && !isMobile.value
  
  return {
    objectFit: needRotation ? 'contain' : 'cover',
    transform: needRotation ? 'rotate(90deg)' : 'none'
  }
})

const containerStyle = computed(() => ({
  paddingBottom: `${aspectRatio.value * 100}%`,
  backgroundColor: '#000'
}))

const videoStyle = computed(() => ({
  ...displayStrategy.value,
  position: 'absolute',
  width: '100%',
  height: '100%'
}))
</script>