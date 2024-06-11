<template>
  <section class="gallery">
    <div class="gallery_row">
      <div class="gallery_title">
        <VHtag size="xl" tag="h3">PREVIEW OF 80 IMAGES</VHtag>
      </div>
      <VTabs :tabsData="tabsData">
        <template v-slot:content="{active}">
          <!-- if gallery1 start -->
          <VTabsBody v-if="active === 'gallery1'">
            <VContainer width="130rem">
              <div @click="toggleRect" class="gallery_content">
                <div
                  ref="item"
                  v-for="item in itemData"
                  :key="item"
                  class="gallery_item first"
                >
                  <VImg :sourse="item.src" :set="item.set" />
                </div>
              </div>
            </VContainer>
          </VTabsBody>
          <!-- if gallery1 end -->
          <!-- if gallery2 start -->
          <VTabsBody v-if="active === 'gallery2'">
            <VContainer width="130rem">
              <div @click="toggleRect" class="gallery_content">
                <div
                  ref="item"
                  v-for="item in itemData"
                  :key="item"
                  class="gallery_item even"
                >
                  <VImg :sourse="item.src" :set="item.set" />
                </div>
              </div>
            </VContainer>
          </VTabsBody>
          <!-- if gallery2 end -->
          <!-- if gallery3 start -->
          <VTabsBody v-if="active === 'gallery3'">
            <VContainer width="130rem">
              <div class="gallery_content">
                <div
                  ref="item"
                  v-for="item in itemData"
                  :key="item"
                  class="gallery_item three"
                >
                  <VImg :sourse="item.src" :set="item.set" />
                </div>
              </div>
            </VContainer>
          </VTabsBody>
          <!-- if gallery3 end -->
          <!-- if gallery4 start -->
          <VTabsBody v-if="active === 'gallery4'">
            <VContainer width="130rem">
              <div class="gallery_content">
                <div
                  ref="item"
                  v-for="item in itemData"
                  :key="item"
                  class="gallery_item last"
                >
                  <VImg :sourse="item.src" :set="item.set" />
                </div>
              </div>
            </VContainer>
          </VTabsBody>
          <!-- if gallery4 end -->
        </template>
      </VTabs>
    </div>
  </section>
</template>

<script setup>
  import VTabs from '@comps/UI/Tabs/VTabs.vue';
  import VContainer from '@comps/UI/Container/VContainer.vue';
  import gallery1 from '@/assets/gallery1.png';
  import gallery2 from '@/assets/gallery2.png';
  import gallery3 from '@/assets/gallery3.png';
  import gallery4 from '@/assets/gallery4.png';
  import gallery5 from '@/assets/gallery5.png';
  import gallery6 from '@/assets/gallery6.png';
  import gallery7 from '@/assets/gallery7.png';
  import gallery8 from '@/assets/gallery8.png';
  import gallery9 from '@/assets/gallery9.png';
  import gallery10 from '@/assets/gallery10.png';
  import gallery11 from '@/assets/gallery11.png';
  import gallery12 from '@/assets/gallery12.png';
  import gallery13 from '@/assets/gallery13.png';
  import gallery14 from '@/assets/gallery14.png';
  import galleryWebp1 from '@/assets/gallery1.webp';
  import galleryWebp2 from '@/assets/gallery2.webp';
  import galleryWebp3 from '@/assets/gallery3.webp';
  import galleryWebp4 from '@/assets/gallery4.webp';
  import galleryWebp5 from '@/assets/gallery5.webp';
  import galleryWebp6 from '@/assets/gallery6.webp';
  import galleryWebp7 from '@/assets/gallery7.webp';
  import galleryWebp8 from '@/assets/gallery8.webp';
  import galleryWebp9 from '@/assets/gallery9.webp';
  import galleryWebp10 from '@/assets/gallery10.webp';
  import galleryWebp11 from '@/assets/gallery11.webp';
  import galleryWebp12 from '@/assets/gallery12.webp';
  import galleryWebp13 from '@/assets/gallery13.webp';
  import galleryWebp14 from '@/assets/gallery14.webp';
  import VImg from '@comps/UI/Img/VImg.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
  import {gsap} from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';
  import {onMounted, defineAsyncComponent} from 'vue';
  const VTabsBody = defineAsyncComponent({
    loader: () => import('@comps/UI/Tabs/VTabsBody.vue'),
  });
  gsap.registerPlugin(ScrollTrigger);
  const itemData = [
    {src: gallery1, set: galleryWebp1},
    {src: gallery2, set: galleryWebp2},
    {src: gallery3, set: galleryWebp3},
    {src: gallery4, set: galleryWebp4},
    {src: gallery5, set: galleryWebp5},
    {src: gallery6, set: galleryWebp6},
    {src: gallery7, set: galleryWebp7},
    {src: gallery8, set: galleryWebp8},
    {src: gallery9, set: galleryWebp9},
    {src: gallery10, set: galleryWebp10},
    {src: gallery11, set: galleryWebp11},
    {src: gallery12, set: galleryWebp12},
    {src: gallery13, set: galleryWebp13},
    {src: gallery14, set: galleryWebp14},
  ];
  const tabsData = [
    {id: 1, label: 'Iridescent', value: 'gallery1'},
    {id: 2, label: 'Black Holographic', value: 'gallery2'},
    {id: 3, label: 'Holographic', value: 'gallery3'},
    {id: 4, label: 'Glass', value: 'gallery4'},
  ];
</script>

<style lang="scss" scoped>
  .gallery {
    &_row {
      padding-top: 5rem;
      padding-bottom: 12rem;
      min-height: 100vh;
      position: relative;
    }

    &_title {
      text-align: center;
      margin-bottom: 5rem;
      color: $white;
    }
    &_content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
    }
    &_item {
      @include size('', 43.333rem);
      border: 1px solid $gray;
      position: relative;
      z-index: 1;
      overflow: hidden;
      cursor: pointer;
      img {
        height: 105%;
      }
      &.even {
        img {
          filter: hue-rotate(300deg);
        }
      }
      &.three {
        img {
          filter: hue-rotate(110deg) saturate(130%) contrast(90%);
        }
      }
      &.last {
        img {
          filter: invert(230%);
        }
      }
    }
  }
  @include media('max', 'lg') {
    .gallery {
      &_content {
        gap: 1.5rem;
      }
    }
  }
  @include media('max', 'md') {
    .gallery {
      &_content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @include media('max', 'sm') {
    .gallery {
      &_row {
        padding-bottom: 3rem;
      }
      &_content {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
      }
      &_item {
        @include size('', 23.333rem);
      }
    }
  }
</style>
