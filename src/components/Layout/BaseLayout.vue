<template>
  <div class="wrapper">
    <div v-if="!isLoaded" class="loader">
      <div class="loader_line"></div>
      <div class="loader_line"></div>
      <div class="loader_line"></div>
      <div class="loader_line"></div>
    </div>
    <BaseHeader />
    <main class="page">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
  import BaseHeader from './BaseHeader.vue';
  import BaseFooter from './BaseFooter.vue';
  const isLoaded = ref(false);
  onMounted(() => {
    document.onreadystatechange = () => {
      if (document.readyState == 'complete') {
        document.body.style.overflowY = 'hidden';
        setTimeout(() => {
          isLoaded.value = true;
          document.body.style.overflowY = 'scroll';
        }, 1300);
      }
    };
  });
</script>

<style lang="scss" scoped>
  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .page {
    flex: 1 1 auto;
  }
  @include media('max', 'lg') {
    .wrapper {
      overflow-x: hidden;
    }
  }
  .loader {
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: $black;
    z-index: 999;
    @include flex(row, center, center);
    gap: 2rem;
    &_line {
      width: 3rem;
      height: 3rem;
      background: linear-gradient(
        to right top,
        #1d33fe,
        #9122eb,
        #c418d7,
        #e527c5,
        #fc41b5
      );
      border-radius: 50%;

      &:first-child {
        animation: left 1s infinite;
      }
      &:last-child {
        animation: right 1s infinite 0.5s;
      }
    }
  }
  @include media('max', 'sm') {
    .loader {
      gap: 2rem;
      &_line {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  @keyframes left {
    40% {
      transform: translate(-6rem);
    }
    50% {
      transform: translate(-0rem);
    }
  }

  @keyframes right {
    40% {
      transform: translate(6rem);
    }
    50% {
      transform: translate(0rem);
    }
  }
</style>
