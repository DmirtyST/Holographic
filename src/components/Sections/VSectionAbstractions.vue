<template>
  <div id="abs" class="abstractions">
    <div class="abstractions_row">
      <div class="abstractions_content">
        <div class="abstractions_substrate"></div>
        <div class="abstractions_title">
          <VHtag size="xxl" tag="h2">4 awesome materials</VHtag>
        </div>

        <ul class="abstractions_item">
          <li v-for="item in dataImages" :key="item.id" class="abstractions_img">
            <picture>
              <source :srcset="item.pathSrcset" type="image/webp" />
              <VImg :sourse="item.pathSrc" ps="contain" />
            </picture>
          </li>
        </ul>
      </div>
    </div>
    <nav class="abstractions_nav">
      <ul class="abstractions_lists">
        <li class="abstractions_list">Iridescent</li>
        <li class="abstractions_list">Black holographic</li>
        <li class="abstractions_list">Holographic</li>
        <li class="abstractions_list">Glass</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import abstractions1 from '@/assets/abstractions1.png';
  import abstractions2 from '@/assets/abstractions2.png';
  import abstractions3 from '@/assets/abstractions3.png';
  import abstractions4 from '@/assets/abstractions4.png';
  import abstractions1Webp from '@/assets/abstractions1.webp';
  import abstractions2Webp from '@/assets/abstractions2.webp';
  import abstractions3Webp from '@/assets/abstractions3.webp';
  import abstractions4Webp from '@/assets/abstractions4.webp';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VImg from '@comps/UI/Img/VImg.vue';
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  const dataImages = [
    {id: 1, pathSrc: abstractions1, pathSrcset: abstractions1Webp},
    {id: 1, pathSrc: abstractions2, pathSrcset: abstractions2Webp},
    {id: 1, pathSrc: abstractions3, pathSrcset: abstractions3Webp},
    {id: 1, pathSrc: abstractions4, pathSrcset: abstractions4Webp},
  ];
  onMounted(() => {
    mm.add('(min-width:1024px)', () => {
      gsap.to('.abstractions_img:nth-child(4)', {
        duration: 7,
        left: '50rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      gsap.to('.abstractions_img:nth-child(3)', {
        duration: 7,
        left: '15rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      gsap.to('.abstractions_img:nth-child(2)', {
        duration: 7,
        left: '-20rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      gsap.to('.abstractions_img:nth-child(1)', {
        duration: 7,
        left: '-50rem',
        scrollTrigger: {
          scrub: 3,
          trigger: '.abstractions_row',
          start: 'center bottom',
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 2,
          trigger: '.abstractions_row',
        },
      });
      tl.to('.abstractions_item', {
        duration: 1,
        bottom: '48rem',
      });
      tl.to('.abstractions_title', {
        duration: 2,
        opacity: 0,
      });
    });
  });
</script>

<style lang="scss" scoped>
  .abstractions {
    height: auto;
    background-color: $black;
    padding-bottom: 10rem;
    &_substrate {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      @include size(100%, 100%);
      background-color: rgba($color: #000000, $alpha: 0.5);
      z-index: 2;
    }
    &_row {
      @include size(100%, 600vh);
      position: relative;
    }
    &_nav {
      @include size(80rem, '');
      @include flex(row, center);
      margin: 0 auto;
      padding-top: 5.5rem;
    }
    &_lists {
      display: flex;
    }
    &_list {
      cursor: pointer;
      @include font(2.3rem, 2.3rem);
      color: $white;
      border-right: 0.3rem solid $white;
      padding: 0 1rem;
      &:first-child {
        padding-left: 0rem;
      }
      &:last-child {
        border-right: none;
      }
    }
    &_content {
      position: sticky;
      top: 0;
      padding-top: 10rem;
      overflow: hidden;
      @include size(100%, 117vh);
      @include flex(column, '', center);
    }
    &_item {
      position: relative;
      bottom: -30rem;
    }
    &_img {
      @include size(75rem, 75rem);
      position: absolute;
      left: 50%;
      transform: translateX(-45%);
      top: 0;

      img {
        left: 0;
        top: 0;
      }
    }
    &_title {
      @include size(70rem, '');
      margin: 0 auto;
      text-align: center;
    }
  }

  @include media('max', 'lg') {
    .abstractions {
      padding-top: 2rem;
      overflow: hidden;
      &_substrate {
        opacity: 1;
      }
      &_row {
        @include size(100%, 60rem);
      }
      &_content {
        position: relative;
        @include size(100%, 100%);
        @include flex(column, center, center);
        padding-top: 0rem;
        overflow: hidden;
      }
      &_title {
        @include size(70rem, '');
        position: relative;
        z-index: 22;
      }
      &_item {
        position: relative;
        bottom: 34rem !important;
        z-index: 1;
      }
      &_img {
        @include size(50rem, 50rem);
        position: absolute;
        left: 50%;
        transform: translateX(-45%);
        top: 0;
        z-index: -1;
        &:nth-child(4) {
          left: 27rem !important;
        }
        &:nth-child(3) {
          left: 12rem !important;
        }
        &:nth-child(2) {
          left: -3rem !important;
        }
        &:nth-child(1) {
          left: -18rem !important;
        }
        img {
          left: 0;
          top: 0;
        }
      }
      &_list {
        @include font(1.8rem, 1.8rem);
        border-right: 0.2rem solid $white;
      }
      &_nav {
        padding: 0 1.5rem;
      }
    }
  }
  @include media('max', 'sm') {
    .abstractions {
      padding-bottom: 5rem;
      &_row {
        @include size(100%, 40rem);
      }
      &_nav {
        @include size(100%, '');
        padding-top: 5.5rem;
      }

      &_item {
        bottom: 16rem !important;
      }
      &_img {
        @include size(30rem, 30rem);
        position: absolute;
        left: 50%;
        transform: translateX(-45%);
        top: 0;
        z-index: -1;
        &:nth-child(4) {
          left: 18rem !important;
        }
        &:nth-child(3) {
          left: 9rem !important;
        }
        &:nth-child(2) {
          left: 0.3rem !important;
        }
        &:nth-child(1) {
          left: -10rem !important;
        }
        img {
          left: 0;
          top: 0;
        }
      }
      &_title {
        width: 100%;
        position: relative;
        z-index: 22;
      }
      &_list {
        @include font(1.2rem, 1.2rem);
        border-right: 0.1rem solid $white;
      }
    }
  }
</style>
