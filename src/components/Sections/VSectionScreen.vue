<template>
  <div class="screen">
    <picture>
      <source :srcset="bgScreenWebp" type="image/webp" />
      <img :src="bgScreen" alt="bg" />
    </picture>
    <div class="screen_row">
      <div class="screen_content">
        <div class="screen_item">
          <div class="screen_sub"><VTypography size="lg">For Figma</VTypography></div>
          <div class="screen_title">
            <VHtag tag="h2" size="xl"
              >Glass And Holographic abstract 3d backgrounds</VHtag
            >
          </div>
        </div>
        <div class="screen_item">
          <div class="screen_desc">
            <VTypography size="md">
              Set of bold and vivid graphics. To make your projects look
              stunning.</VTypography
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import bgScreen from '@/assets/bg-screen.png';
  import bgScreenWebp from '@/assets/bg-screen.webp';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .screen {
    height: 125vh;
    position: relative;
    z-index: 1;
    background-image: $pureLinear;
    overflow: hidden;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      display: inline-block;
      will-change: transform;
      transform: translate3d(0rem, 0rem, 0rem) scale3d(1.3, 1.26666, 1) rotateX(35deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      transform-style: preserve-3d;
      object-fit: cover;
      z-index: -1;
    }
    &_row {
      position: relative;
      overflow: hidden;
      z-index: 1;
      @include size(100%, 100%);
      @include flex(column, center);
      padding: 0 15px;
    }

    &_content {
      margin: 0 auto;
      @include size(119rem, 57rem);
      @include flex(column, space-between, center);
    }
    &_item {
      text-align: center;
      &:last-child {
        position: relative;
        top: 10rem;
      }
    }
    &_sub {
      margin-bottom: 3.2rem;
      opacity: 0.8;
      font-style: italic;
    }

    &_desc {
      @include size(30rem, '');
      opacity: 0.8;
    }
    &_icon {
      margin-top: 10rem;
      position: relative;
      z-index: 22;
      top: 4rem;
      animation: down 2s ease-in-out infinite alternate-reverse;
    }
    @keyframes down {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(50px);
      }
    }
  }
  @include media('max', 'lg') {
    .screen {
      &_content {
        @include size(100%, 57rem);
      }
      &_title {
        margin-bottom: 3rem;
      }
      &_sub {
        margin-bottom: 2rem;
      }
      &_desc {
        font-size: 2.2rem;
        line-height: 2.2rem;
        width: 30rem;
      }
      &_content {
        height: 100%;
        @include flex(column, center, center);
        color: $white;
      }
    }
  }

  @include media('max', 'sm') {
    .screen {
      @include size(100%, 60rem);

      &_title {
        @include size(20rem, '');
      }
      &_sub {
        margin-bottom: 2rem;
      }
      &_desc {
        @include size(30rem, '');
      }
    }
  }
</style>
