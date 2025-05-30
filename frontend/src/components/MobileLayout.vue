<template>
  <div class="mobile-layout">
    <VideoContainer 
      :video-src="videoSrc"
      aspect-ratio="9:16"
      :object-fit="videoFitMode"
    />
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

// 横屏视频
const videoFitMode = computed(() => {
  const resolution = props.videoData.meta.resolution.split('x').map(Number);
  const aspectRatio = resolution[0] / resolution[1] ;
  return videoRatio.split(':')[0] > videoRatio.split(':')[1] ? 'contain' : 'cover';
});
</script>

<style scoped>
.mobile-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.video-container {
  flex: 7;
}

.comment-section {
  flex: 3;
}
</style>