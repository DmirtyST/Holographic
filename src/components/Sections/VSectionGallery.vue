<template>
  <div class="gallery">
    <div class="gallery_row">
      <div class="gallery_title">
        <VHtag size="xl" tag="h3">PREVIEW OF 80 IMAGES</VHtag>
      </div>
      <VTabs @changeTab="changeTab" :tabsData="tabsData" :selectedTab="selectedTab">
        <VContainer width="130rem">
          <div
            :class="selectedTab === 1 ? 'gallery_content first' : 'gallery_content'"
            v-if="selectedTab === 1"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :set="item.set" :sourse="item.src" ps="cover" />
            </div>
          </div>
          <div
            :class="selectedTab === 2 ? 'gallery_content two' : 'gallery_content'"
            v-if="selectedTab === 2"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :set="item.set" :sourse="item.src" ps="cover" />
            </div>
          </div>
          <div
            :class="selectedTab === 3 ? 'gallery_content three' : 'gallery_content'"
            v-if="selectedTab === 3"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :set="item.set" :sourse="item.src" ps="cover" />
            </div>
          </div>
          <div
            :class="selectedTab === 4 ? 'gallery_content last' : 'gallery_content'"
            v-if="selectedTab === 4"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :set="item.set" :sourse="item.src" ps="cover" />
            </div>
          </div>
        </VContainer>
      </VTabs>
    </div>
  </div>
</template>

<script setup>
  import VTabs from '@comps/UI/Tabs/VTabs.vue';
  import {ref} from 'vue';
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
  import gallery15 from '@/assets/gallery15.png';
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
  import galleryWebp15 from '@/assets/gallery15.webp';
  import VImg from '@comps/UI/Img/VImg.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
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
    {src: gallery15, set: galleryWebp15},
  ];
  const itemDataWebp = [];
  const tabsData = [
    {id: 1, label: 'Iridescent'},
    {id: 2, label: 'Black Holographic'},
    {id: 3, label: 'Holographic'},
    {id: 4, label: 'Glass'},
  ];
  const selectedTab = ref(1);
  const changeTab = (tabId) => {
    selectedTab.value = tabId;
  };
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

      &.two {
        .gallery_item {
          img {
            filter: hue-rotate(200deg);
          }
        }
      }
      &.three {
        .gallery_item {
          img {
            filter: hue-rotate(38deg);
          }
        }
      }
      &.last {
        .gallery_item {
          img {
            filter: hue-rotate(336deg);
          }
        }
      }
    }
    &_item {
      @include size('', 43.333rem);
      border: 1px solid $gray;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }
  }
  @include media('max', 'lg') {
    .gallery {
      &_content {
        display: grid;
        gap: 1.5rem;
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
