<template>
  <div class="header">
    <div class="header_row">
      <div class="header_logo">
        <VImg :sourse="logo" ps="cover" />
      </div>
      <button class="header_btn">FREE TRY</button>
    </div>
  </div>
</template>

<script setup>
  import VImg from '../UI/Img/VImg.vue';
  import logo from '@/assets/logo.png';
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    width: 100%;
    z-index: 888;
    left: 0;
    top: 0;
    &_row {
      padding: 0 4.5rem;
      padding-top: 2.4rem;
      padding-bottom: 3.2rem;
      @include flex(row, space-between, center);
    }
    &_btn {
      border-radius: 10rem;
      padding: 1.7rem 2.8rem 1.7rem 2.8rem;
      @include font(1.9rem, 2rem, 0, 300);
      background-color: $black;
      color: $white;
      cursor: pointer;
    }
    &_logo {
      @include size(23rem, 5rem);
      position: relative;
    }
  }
  @include media('max', 'lg') {
    .header {
      &_logo {
        width: 14.2rem;
        height: 3.2rem;
        position: relative;
      }

      &_btn {
        padding: 1.2rem 2.4rem 1.2rem 2.4rem;
        @include font(1.4rem, 2rem, 0, 300);
      }
    }
  }
  @include media('max', 'sm') {
    .header {
      &_logo {
        @include size(12.2rem, 2.6rem);
      }
      &_row {
        padding: 0 1.5rem;
        padding-top: 2.4rem;
      }
      &_btn {
        padding: 1rem 2rem 1rem 2rem;
        @include font(1.2rem, 2rem, 0, 300);
      }
    }
  }
</style>
