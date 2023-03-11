<template>
  <div class="tabs">
    <ul class="tabs_nav">
      <li
        class="tabs_tab"
        :class="{active: tab.value == activeTab}"
        v-for="(tab, index) in tabsData"
        :key="index"
        @click="activeTab = tab.value"
      >
        {{ tab.label }}
      </li>
    </ul>
    <ul class="tabs_navScroll">
      <li
        class="tabs_tab"
        :class="{active: tab.value == activeTab}"
        v-for="(tab, index) in tabsData"
        :key="index"
        @click="activeTab = tab.value"
      >
        {{ tab.label }}
      </li>
    </ul>
    <div class="tabs_content"><slot name="content" :active="activeTab"></slot></div>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import {ref} from 'vue';
  const props = defineProps({
    tabsData: {
      type: Array,
      required: true,
    },
  });
  const activeTab = ref(props.tabsData[0].value);
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  onMounted(() => {
    mm.add('(min-width:568px)', () => {
      gsap.fromTo(
        '.tabs_nav',
        {opacity: 1},
        {
          opacity: 0,
          duration: 0.4,
          scrollTrigger: {
            toggleActions: 'restart reverse restart reverse',
            start: 'top -25%',
            end: () => `+=${document.querySelector('.gallery_row').offsetHeight - 350}`,
            trigger: document.querySelector('.gallery_row'),
          },
        },
      );
      gsap.fromTo(
        '.tabs_navScroll',
        {opacity: 0},
        {
          opacity: 1,
          padding: '30px',
          duration: 0.6,
          scrollTrigger: {
            toggleActions: 'restart reverse restart reverse',
            start: 'top -35%',
            end: () => `+=${document.querySelector('.gallery_row').offsetHeight - 550}`,
            trigger: document.querySelector('.gallery_row'),
          },
        },
      );
    });

    mm.add('(max-width:568px)', () => {
      gsap.fromTo(
        '.tabs_nav',
        {opacity: 1},
        {
          opacity: 0,
          duration: 0.4,
          scrollTrigger: {
            toggleActions: 'restart reverse restart reverse',
            start: 'top -25%',
            end: () => `+=${document.querySelector('.gallery_row').offsetHeight - 350}`,
            trigger: document.querySelector('.gallery_row'),
          },
        },
      );
      gsap.fromTo(
        '.tabs_navScroll',
        {opacity: 0},
        {
          opacity: 1,
          padding: '20px',
          duration: 0.6,
          scrollTrigger: {
            toggleActions: 'restart reverse restart reverse',
            start: 'top -35%',
            end: () => `+=${document.querySelector('.gallery_row').offsetHeight - 750}`,
            trigger: document.querySelector('.gallery_row'),
          },
        },
      );
    });
  });
</script>

<style lang="scss" scoped>
  .tabs {
    color: white;
    &_nav,
    &_navScroll {
      @include flex(row, center);
      @include size(100%, '');
      gap: 2rem;
      margin-bottom: 6rem;
      z-index: 22;
      z-index: 9999;
      position: relative;
    }
    &_navScroll {
      position: fixed;
      z-index: 9999;
      background-color: #000000;
      top: 0;
      border-bottom: 2px solid rgba(rgb(143, 10, 107), 0.8);
    }
    &_tab {
      @include font(2.4rem, 2.4rem, -0.800000011920929px, 400);
      opacity: 0.4;
      transition: all ease 0.4s;
      cursor: pointer;
      &.active {
        opacity: 1;
        transition: all ease 0.4s;
      }
    }
    &_content {
      height: auto;
    }
  }
  @include media('max', 'sm') {
    .tabs {
      &_tab {
        @include font(1.4rem, 1.4rem, -0.800000011920929px, 400);
      }
      &_nav {
        margin-bottom: 3rem;
      }
    }
  }
</style>
