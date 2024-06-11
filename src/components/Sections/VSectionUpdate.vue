<template>
  <section class="update">
    <div class="update_row">
      <div class="update_content">
        <div class="update_item">
          <div class="update_title">
            <div class="update_sub">
              <VTypography size="md">Examples of how to use GLOSSY 3d set</VTypography>
            </div>
            <VHtag size="xxl" tag="h2">Enhance your design projects</VHtag>
          </div>
          <div class="update_left">
            <picture>
              <source :srcset="updateLeftWebp" type="image/webp" />
              <VImg :sourse="updateLeft" ps="contain" />
            </picture>
          </div>
        </div>
        <div class="update_item">
          <div class="update_right">
            <picture>
              <source :srcset="updateRightWebp" type="image/webp" />
              <VImg :sourse="updateRight" ps="contain" />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="update_bottom">
      <div class="update-bottom_content">
        <div class="update-bottom_img">
          <picture>
            <source :srcset="updateBoxWebp" type="image/webp" />
            <VImg :sourse="updateBox" ps="contain" />
          </picture>
        </div>
        <div class="update-bottom_item">
          <p class="update-bottom_text">
            <VTypography size="md">
              Building a portfolio, posting stories for your brand, looking for a new
              graphic for a design studio or just want to impress your client with fresh
              3D illustrations?</VTypography
            >
          </p>
          <p class="update-bottom_text">
            <VTypography size="md">
              This abstract pack is perfect for a variety of design projects!</VTypography
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import VImg from '@comps/UI/Img/VImg.vue';
  import updateRight from '@/assets/updateRight.png';
  import updateLeft from '@/assets/updateLeft.png';
  import updateBox from '@/assets/updateBox.png';
  import updateRightWebp from '@/assets/updateright.webp';
  import updateLeftWebp from '@/assets/updateleft.webp';
  import updateBoxWebp from '@/assets/updateBox.webp';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted} from 'vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
  gsap.registerPlugin(ScrollTrigger);
  onMounted(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width:1024px)', () => {
      const tlLeft = gsap.timeline({
        scrollTrigger: {
          scrub: 4,
          toggleActions: 'restart none none none',
          start: 'center bottom',
          trigger: '.update_row',
        },
      });
      tlLeft.to('.update_title', {
        translateX: '-120%',
        position: 'absolute',
        duration: 0.5,
      });
      tlLeft.to('.update_left', {
        opacity: 1,
        scale: 1,
        transition: 'all .4s easy',
        duration: 1,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          scrub: 4,
          toggleActions: 'restart none none none',
          start: 'top 60%',
          trigger: '.update_row',
        },
      });
      tl.to('.update_right', {
        translateY: '-12%',
      });
      gsap.to('.update-bottom_img', {
        x: '0%',
        opacity: 1,
        duration: 2,
        transition: 'all .4s easy',
        scrollTrigger: {
          toggleActions: 'restart none none reverse',
          start: 'top center',
          trigger: '.update_bottom',
        },
      });
      gsap.to('.update-bottom_item', {
        x: '0%',
        opacity: 1,
        duration: 2,
        transition: 'all .4s easy',
        scrollTrigger: {
          toggleActions: 'restart none none reverse',
          start: 'top center',
          trigger: '.update_bottom',
        },
      });
    });
  });
</script>

<style lang="scss" scoped>
  .update {
    height: auto;

    &_row {
      height: 450vh;
      @include size('', 450vh);
    }
    &_content {
      position: sticky;
      top: 0;
      @include size('', 100vh);
      @include flex(row, space-between);
      padding: 0 7.5rem;
      padding-top: 13rem;
      overflow: hidden;
    }
    &_item {
      &:first-child {
        @include flex(column, '', flex-start);
      }
    }
    &_sub {
      opacity: 0.5;
      margin-bottom: 0.5rem;
    }
    &_title {
      @include size(66rem, '');
    }
    &_right {
      @include size(40rem, 60rem);
      position: relative;
      transform: translateY(80%);
    }

    &_left {
      position: relative;
      width: 90rem;
      height: 56rem;
      @include size(90rem, 56rem);
      opacity: 0;
      transform: scale(0.8);
    }
    &_bottom {
      @include size('', 100vh);
      height: 100vh;
      padding-top: 4rem;
    }
    &-bottom {
      &_img {
        @include size(40rem, 60rem);
        position: relative;
        transform: translateX(-100%);
        opacity: 0;
      }
      &_item {
        @include size(26rem, '');
        @include flex(column);
        gap: 7rem;
        transform: translateX(100%);
        opacity: 0;
      }

      &_content {
        @include flex(row, space-between, center);
        @include size(90rem, '');
        margin: 0 auto;
      }
    }
  }

  @include media('max', 'lg') {
    .update {
      padding: 0 1.5rem;
      padding-bottom: 2rem;
      &_row {
        height: auto;
      }
      &_content {
        height: auto;
        padding: 0 0rem;
        padding-top: 5rem;
        display: block;
      }

      &_item {
        display: none;
      }
      &_title {
        margin-bottom: 2rem;
      }
      &_left {
        @include size(100%, 40rem);
        opacity: 1;
        transform: scale(1);
        img {
          object-fit: cover;
        }
      }
      &_bottom {
        height: auto;
        padding-top: 4rem;
      }
      &-bottom {
        &_img {
          @include size(30rem, 50rem);
          position: relative;
          transform: translateX(0%);
          opacity: 1;
        }
        &_item {
          transform: translateX(0%);
          opacity: 1;
        }
        &_content {
          @include flex(row, space-around, center);
          @include size(100%, '');
          gap: 1rem;
        }
      }
    }
  }

  @include media('max', 'sm') {
    .update {
      &_title {
        @include size(100%, '');
      }
      &_left {
        @include size(100%, 22rem);
      }

      &_bottom {
        padding-top: 3rem;
      }
      &-bottom {
        &_img {
          @include size(20rem, 40rem);
        }

        &_item {
          @include flex(column);
          @include size(26rem, '');
          gap: 2rem;
          text-align: center;
        }
        &_content {
          @include flex(column, center, center);
          @include size(100%, '');
          gap: 3rem;
        }
      }
    }
  }
</style>
