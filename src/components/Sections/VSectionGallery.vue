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
              <VImg :sourse="item" ps="cover" />
            </div>
          </div>
          <div
            :class="selectedTab === 2 ? 'gallery_content two' : 'gallery_content'"
            v-if="selectedTab === 2"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :sourse="item" ps="cover" />
            </div>
          </div>
          <div
            :class="selectedTab === 3 ? 'gallery_content three' : 'gallery_content'"
            v-if="selectedTab === 3"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :sourse="item" ps="cover" />
            </div>
          </div>
          <div
            :class="selectedTab === 4 ? 'gallery_content last' : 'gallery_content'"
            v-if="selectedTab === 4"
          >
            <div v-for="item in itemData" :key="item" class="gallery_item">
              <VImg :sourse="item" ps="cover" />
            </div>
          </div>
        </VContainer>
      </VTabs>
    </div>
  </div>
</template>

<script setup>
  import VTabs from '../UI/Tabs/VTabs.vue';
  import {ref} from 'vue';
  import VContainer from '../UI/Container/VContainer.vue';
  import gallery1 from '../Image/gallery1.png';
  import gallery2 from '../Image/gallery2.png';
  import gallery3 from '../Image/gallery3.png';
  import gallery4 from '../Image/gallery4.png';
  import gallery5 from '../Image/gallery5.png';
  import gallery6 from '../Image/gallery6.png';
  import gallery7 from '../Image/gallery7.png';
  import gallery8 from '../Image/gallery8.png';
  import gallery9 from '../Image/gallery9.png';
  import gallery10 from '../Image/gallery10.png';
  import gallery11 from '../Image/gallery11.png';
  import gallery12 from '../Image/gallery12.png';
  import gallery13 from '../Image/gallery13.png';
  import gallery14 from '../Image/gallery14.png';
  import gallery15 from '../Image/gallery15.png';
  import VImg from '../UI/Img/VImg.vue';
  import VHtag from '../UI/Htag/VHtag.vue';
  const itemData = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12,
    gallery13,
    gallery14,
    gallery15,
  ];
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
