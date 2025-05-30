<template>
  <div class="desktop-layout">
    <div class="left-panel">
      <VideoContainer 
        :video-src="videoSrc"
        aspect-ratio="16:9"
        :object-fit="videoFitMode"
      />
      <GiftSection />
    </div>
    <CommentSection />
  </div>
</template>

<script setup>
import VideoContainer from './VideoContainer.vue';

const props = defineProps({
  videoSrc: {
    type: Object,
    required: true
  }
});

// 竖屏视频
const videoFitMode = computed(() => {
  const resolution = props.videoData.meta.resolution.split('x').map(Number);
  const aspectRatio = resolution[0] / resolution[1] ;
  return videoRatio.split(':')[0] < videoRatio.split(':')[1] ? 'contain' : 'cover';
});
</script>

<style scoped>
.desktop-layout {
  display: flex;
  height: 100vh;
}

.left-panel {
  flex: 7;
  display: flex;
  flex-direction: column;
}

.comment-section {
  flex: 3;
}
</style>