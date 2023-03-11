<template>
  <div class="price">
    <div class="price_row">
      <div class="price_content">
        <div class="price_item">
          <div class="price_img">
            <picture>
              <source :srcset="priceCenterWebp" type="image/webp" />
              <VImg :sourse="priceCenter" ps="contain" />
            </picture>
          </div>
          <div class="price_title">
            <VHtag tag="h3" size="xl"> Get Full Glossy set</VHtag>
          </div>
          <ul class="price_lists">
            <li class="price_list">20 Different shapes</li>
            <li class="price_list">4 Cool materials</li>
            <li class="price_list">3600x3600px</li>
            <li class="price_list">Figma file</li>
            <li class="price_list">PNG images</li>
          </ul>
          <div class="price_btn">Purchase, $36</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VImg from '@comps/UI/Img/VImg.vue';
  import priceCenter from '@/assets/priceCenter.png';
  import priceCenterWebp from '@/assets/priceCenter.webp';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width:568px)', () => {
      gsap.fromTo(
        '.price_img',
        {opacity: 0, scale: 0.5, rotateZ: '-29deg', rotateY: '-70deg', rotateX: '30deg'},
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          rotateZ: '0deg',
          rotateY: '0deg',
          rotateX: '0deg',
          scrollTrigger: {
            trigger: '.price_row',
            toggleActions: 'restart none none reverse',
            start: 'top 20%',
          },
        },
      );
    });
  });
</script>

<style lang="scss" scoped>
  .price {
    padding-top: 15rem;
    margin-bottom: 22rem;
    &_row {
      height: 100vh;
    }
    &_content {
      @include size(130rem, 63rem);
      @include flex(column, center, center);
      margin: 0 auto;
      position: sticky;
      top: 4rem;
      border: 1px solid $gray;
    }

    &_item {
      color: $white;
      @include flex(column, '', center);
      @include size(50rem, '');
      gap: 5.6rem;
      text-align: center;
      position: relative;
      z-index: 1;
      perspective: 400rem;
    }
    &_img {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      @include size(120rem, 120rem);
      z-index: -1;
    }

    &_title {
      text-transform: uppercase;
    }
    &_lists {
      @include flex(column, center, center);
      gap: 1.5rem;
    }
    &_list {
      @include font(2.4rem, 2.4rem, -0.5px, 400);
    }
    &_btn {
      cursor: pointer;
      padding: 1.5rem 3.1rem;
      background-color: $white;
      @include font(2.4rem, 2.4rem, -0.5px, 300);
      border-radius: 10rem;
      color: $black;
    }
  }
  @include media('max', 'lg') {
    .price {
      margin-bottom: 5rem;
      padding: 0 1.5rem;
      height: auto;
      &_row {
        @include size('', 55rem);
      }
      &_content {
        @include size(100%, 100%);
        position: static;
      }
      &_img {
        @include size(80rem, 80rem);
        z-index: -1;
        opacity: 0;
      }
      &_list {
        @include font(1.8rem, 1.8rem, -0.5px, 400);
      }
      &_btn {
        padding: 1.5rem 2.1rem;
        @include font(1.8rem, 1.8rem, -0.5px, 300);
      }
    }
  }
  @include media('max', 'sm') {
    .price {
      margin-bottom: 5rem;
      padding: 0 1.5rem;
      padding-top: 1rem;
      overflow: hidden;

      &_row {
        height: 40rem;
        @include size('', 40rem);
      }
      &_item {
        @include size(100%);
      }
      &_img {
        @include size(50rem, 50rem);
        z-index: -1;
        opacity: 1;
        transform: translate(-50%, -50%) scale(1) rotateX(33deg);
      }
      &_list {
        @include font(1.5rem, 1.5rem, -0.5px, 400);
      }
      &_btn {
        padding: 1.1rem 1.8rem;
        @include font(1.5rem, 1.5rem, -0.5px, 300);
      }
    }
  }
</style>
