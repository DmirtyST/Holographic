<template>
  <div class="collection">
    <div class="collection_top">
      <div class="collection_title">
        <VHtag size="xxl" tag="h2">20 different Shapes</VHtag>
      </div>
      <div class="collection_text">
        <VTypography size="md">
          Curved lines, abstract, surreal, flying-paper-like, fluid, liquid, ribbons.
          Diverse variety of cool forms that you can use in your projects. Just look at
          how bright and attractive these illustrations are!
        </VTypography>
      </div>
    </div>
    <div class="collection_row">
      <div class="collection_item">
        <div class="collection_number">1</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp1" :sourse="collection1" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">2</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp2" :sourse="collection2" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">3</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp3" :sourse="collection3" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">4</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp4" :sourse="collection4" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">5</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp5" :sourse="collection5" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">6</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp4" :sourse="collection4" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">7</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp7" :sourse="collection7" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">8</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp8" :sourse="collection8" />
        </div>
      </div>
      <div class="collection_item">
        <div class="collection_number">9</div>
        <div class="collection_img">
          <VImg ps="contain" :set="collectionWebp9" :sourse="collection9" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import collection1 from '@/assets/collection1.png';
  import collection2 from '@/assets/collection2.png';
  import collection3 from '@/assets/collection3.png';
  import collection4 from '@/assets/collection4.png';
  import collection5 from '@/assets/collection5.png';
  import collection7 from '@/assets/collection7.png';
  import collection8 from '@/assets/collection8.png';
  import collection9 from '@/assets/collection9.png';
  import collectionWebp1 from '@/assets/collection1.webp';
  import collectionWebp2 from '@/assets/collection2.webp';
  import collectionWebp3 from '@/assets/collection3.webp';
  import collectionWebp4 from '@/assets/collection4.webp';
  import collectionWebp5 from '@/assets/collection5.webp';
  import collectionWebp7 from '@/assets/collection7.webp';
  import collectionWebp8 from '@/assets/collection8.webp';
  import collectionWebp9 from '@/assets/collection9.webp';
  import VImg from '@comps/UI/Img/VImg.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import VTypography from '@comps/UI/Typography/VTypography.vue';
</script>

<style lang="scss" scoped>
  .collection {
    height: auto;
    background-color: $blue;
    &_row {
      min-height: 200vh;
      @include size('', 300vh);
      @include flex() {
        flex-wrap: wrap;
      }
      padding-left: 7rem;
      overflow: hidden;
    }
    &_top {
      color: $white;
      @include flex(row, space-between, center);
      @include size(130rem, '');
      padding-top: 9rem;
      padding-left: 7.5rem;
      padding-bottom: 9rem;
    }
    &_item {
      @include size(48rem, 53rem);
      border: 1px solid $blueLight;
      z-index: 1;
      padding: 6.5rem 4.5rem;
      @include flex(row, center, center);
      background-color: $blue;
      position: relative;
      transition: all ease 0.4s;
      overflow: hidden;
      &:hover {
        background-color: $black;
        transition: all ease 0.4s;
      }

      &:nth-child(2) {
        transform: translate(-18rem, 40rem);
        box-shadow: 53px 28px 30px -10px #00000073;
        z-index: 5;
      }
      &:nth-child(3) {
        transform: translate(-15.2rem, 10.6rem);
        z-index: 4;
      }
      &:nth-child(4) {
        transform: translate(114rem, -33.4rem);
        z-index: 22;
        box-shadow: 53px 27px 30px -10px #00000073;
      }
      &:nth-child(5) {
        transform: translate(-64rem, 33.5rem);
        z-index: 20;
        width: 50;
        height: 53;
        box-shadow: 51px 29px 30px -10px #00000073;
        img {
          left: 45px;
        }
      }
      &:nth-child(6) {
        transform: translate(63rem, -35rem);
        @include size(53rem, 53rem);
        z-index: 6;
      }
      &:nth-child(7) {
        transform: translate(-28.5rem, 13.5rem);
        z-index: 15;
        width: 50rem;
        height: 53rem;
      }
      &:nth-child(8) {
        transform: translate(93rem, -44rem);
        z-index: 22;
        @include size(50rem, 53rem);
      }
      &:last-child {
        transform: translate(15.5rem, 12rem);
        box-shadow: 60px 0px 30px -10px #00000073;
      }
    }
    &_img {
      width: inherit;
      height: inherit;
      position: relative;
      z-index: -1;
    }
    &_title {
      @include size(70rem, '');
    }
    &_number {
      @include font(1.4rem, 2rem, 0, 400);
      color: $white;
      top: 2.3rem;
      left: 2.1rem;
      position: absolute;
      z-index: 22;
    }
    &_text {
      @include size(30rem, '');
    }
  }

  @include media('max', 'lg') {
    .collection {
      padding: 0 1.5rem;
      &_top {
        padding-left: 0;
        padding-bottom: 5rem;
        padding-top: 5rem;
        width: 100%;
        display: block;
      }
      &_text {
        display: none;
      }
      &_title {
        @include size(100%, '');
      }
      &_row {
        min-height: 200vh;
        height: auto;
        display: grid;
        grid-template-columns: 50% 48%;
        padding-left: 0;
        padding-bottom: 3rem;
        overflow: hidden;
        gap: 1.5rem;
        margin: 0 auto;
      }
      &_item {
        &:first-child,
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:last-child {
          @include size(100%, 100%);
          transform: translate(-0rem, 0rem);
          box-shadow: none;
          padding: 1.5rem 1.5rem;
        }
      }
      &_number {
        top: 1.3rem;
        left: 1.3rem;
      }
    }
  }

  @include media('max', 'sm') {
    .collection {
      &_row {
        grid-template-columns: 100%;
        gap: 1rem;
      }
      &_top {
        padding-bottom: 3rem;
        padding-top: 3rem;
      }
      &_item {
        &:first-child,
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(8),
        &:last-child {
          @include size('', 33rem);
          padding: 4.5rem 4.5rem;
        }
      }
    }
  }
</style>
