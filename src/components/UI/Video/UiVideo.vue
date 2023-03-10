<template>
  <video
    ref="videoElement"
    preload="metadata"
    muted="muted"
    id="video"
    loop
    class="video"
  >
    <slot></slot>
  </video>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  const videoElement = ref(null);
  const playing = ref(false);
  onMounted(() => {
    const screen = gsap.utils.toArray('.screen');
    gsap.to(videoElement, {
      scrollTrigger: {
        trigger: screen,
        start: 'top center',
        onEnter: () => {
          playing.value = true;
          if (playing.value === true) {
            videoElement.value?.play();
          } else {
            videoElement.value?.pause();
          }
        },
      },
    });
  });
</script>

<style lang="scss" scoped>
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  source {
    width: 100%;
    height: 100%;
  }
</style>
