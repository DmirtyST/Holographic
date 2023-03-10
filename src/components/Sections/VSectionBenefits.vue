<template>
  <div class="benefits">
    <div class="benefits_row">
      <div class="benefits_content">
        <div class="benefits_image">
          <picture>
            <source :srcset="benefistCenterWebp" type="image/webp" />
            <VImg :sourse="benefistCenter" ps="contain" />
          </picture>
        </div>
        <div class="benefits_item">
          <div class="benefits_rotate">
            <ACircling />
          </div>
          <div class="benefits_title">
            <VHtag size="xxl" tag="h2">Premium quality</VHtag>
          </div>
          <div class="benefits_sub">
            <VTypography size="md">
              Highly detailed renders. With good light. At 3600x3600px
              resolution.</VTypography
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import VImg from '@comps/UI/Img/VImg.vue';
  import benefistCenter from '@/assets/benefist_center.png';
  import benefistCenterWebp from '@/assets/benefist-center.webp';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import ACircling from '@comps/UI/Animation/ACircling.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  onMounted(() => {
    mm.add('(min-width:568px)', () => {
      gsap.to('.benefits_image', {
        scale: 1,
        ease: '.7s',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.benefits_content',
          toggleActions: 'restart none none reverse',
          start: 'top 40%',
        },
      });
    });
    mm.add('(max-width:568px)', () => {
      gsap.to('.benefits_image', {
        scale: 1,
        ease: '.7s',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.benefits_content',
          start: 'top 40%',
          once: true,
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .benefits {
    padding-top: 12rem;
    background-color: $black;
    height: auto;
    &_row {
      height: 100vh;
    }
    &_image {
      width: 65rem;
      height: 65rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) scale(0.4);
      z-index: -1;
      opacity: 0;
    }
    &_title {
      padding: 0 15px;
    }
    &_item {
      color: $white;
      text-align: center;
    }
    &_rotate {
      @include flex(row, center);
    }

    &_content {
      @include size('', 100vh);
      @include flex(row, center, center);
      position: sticky;
      top: 0;
      overflow: hidden;
    }
  }
  @include media('max', 'lg') {
    .benefits {
      padding-top: 0rem;
      padding: 0 1.5rem;
      &_row {
        @include size('', 55rem);
      }
      &_content {
        @include size('', 100%);
      }

      &_image {
        @include size(45rem, 45rem);
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%) scale(0.4);
        z-index: -1;
        opacity: 0;
      }
    }
  }
  @include media('max', 'sm') {
    .benefits {
      padding-top: 0rem;
      &_row {
        @include size('', 40rem);
      }

      &_image {
        @include size(35rem, 35rem);
        position: absolute;
        left: 50%;
        top: 10%;
        transform: translateX(-50%) scale(0.4);
        z-index: -1;
        opacity: 0;
      }
    }
  }
</style>
