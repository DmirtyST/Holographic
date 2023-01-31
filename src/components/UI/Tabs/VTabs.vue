<template>
  <div class="tab">
    <ul class="tab_nav">
      <li
        :class="selectedTab === item.id ? 'tab_list selected' : 'tab_list'"
        v-for="item in tabsData"
        :key="item.id"
        @click="clickOnTab(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>
    <div class="tab_content"><slot></slot></div>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  const props = defineProps({
    tabsData: {
      type: Array,
      required: true,
    },
    selectedTab: {
      type: String,
      required: false,
    },
  });
  const emit = defineEmits(['changeTab']);
  const clickOnTab = (tabId) => {
    emit('changeTab', tabId);
  };

  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    gsap.to('.tab_nav', {
      position: 'fixed',
      duration: 0.5,
      padding: '20px',
      zIndex: '9999',

      backgroundColor: '#000000',
      top: 0,
      scrollTrigger: {
        toggleActions: 'restart reverse restart reverse',
        start: 'top 10%',
        end: () => `+=${document.querySelector('.gallery_content').offsetHeight}`,
        trigger: '.gallery_content',
      },
    });
  });
</script>

<style lang="scss" scoped>
  .tab {
    color: white;
    &_nav {
      @include flex(row, center);
      @include size(100%, '');
      gap: 2rem;
      margin-bottom: 6rem;
      z-index: 22;
      z-index: 9999;
      position: relative;
    }

    &_list {
      @include font(2.4rem, 2.4rem, -0.800000011920929px, 400);
      opacity: 0.2;
      transition: all ease 0.4s;
      cursor: pointer;
      &.selected {
        opacity: 1;
      }
    }
    &_content {
      height: auto;
    }
  }
  @include media('max', 'sm') {
    .tab {
      &_list {
        @include font(1.4rem, 1.4rem, -0.800000011920929px, 400);
      }
      &_nav {
        margin-bottom: 3rem;
      }
    }
  }
</style>
