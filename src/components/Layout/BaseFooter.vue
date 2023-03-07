<template>
  <div class="footer">
    <VContainer width="135rem">
      <div class="footer_row">
        <div class="footer_content">
          <div class="footer_item">
            <div class="footer_logo">
              <VImg :sourse="logoFooter" ps="contain" />
            </div>
          </div>
          <div class="footer_item">
            <ul class="footer_lists">
              <li><div class="footer_title">Products</div></li>
              <li class="footer_list">Characters</li>
              <li class="footer_list">Abstract</li>
              <li class="footer_list">Themes</li>
              <li class="footer_list">Mockups</li>
              <li class="footer_list">Freebies</li>
              <li class="footer_list">Pro Access</li>
            </ul>
            <ul class="footer_lists">
              <li><div class="footer_title">Info</div></li>
              <li class="footer_list">License</li>
              <li class="footer_list">Use cases</li>
              <li class="footer_list">Order custom</li>
              <li class="footer_list">help@wannathis.one</li>
            </ul>
            <div>
              <div class="footer_title">Follow us</div>
              <ul class="footer_lists">
                <li class="footer_list"><VSvg id="Be" width="22" height="22" /></li>
                <li class="footer_list"><VSvg id="Bas" width="22" height="22" /></li>
                <li class="footer_list"><VSvg id="P" width="22" height="22" /></li>
                <li class="footer_list"><VSvg id="Tw" width="22" height="22" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </VContainer>
  </div>
</template>
<script setup>
  import VContainer from '../UI/Container/VContainer.vue';
  import VImg from '../UI/Img/VImg.vue';
  import logoFooter from '@/assets/logoFooter.png';
  import VSvg from '../UI/SVG/VSvg.vue';
</script>

<style lang="scss" scoped>
  .footer {
    &_row {
      @include size('', 45rem);
      @include flex(column, center);
      color: $white;
      padding-top: 4.6rem;
    }
    &_logo {
      @include size(16.7rem, 4.8rem);
      position: relative;
      z-index: 22;
    }
    &_content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    &_item {
      &:last-child {
        @include flex(row, space-between);
      }
    }
    &_title {
      margin-bottom: 5rem;
      @include font(1.8rem, 2.3rem, 0, 400);
      text-transform: uppercase;
    }
    &_lists {
      &:last-child {
        display: flex;
        gap: 1rem;
      }
    }
    &_list {
      @include font(1.8rem, 1.7rem, 0, 400);
      cursor: pointer;
      margin-bottom: 1.6rem;
      &:last-child {
        margin-bottom: 0rem;
      }
    }
  }

  @include media('max', 'lg') {
    .footer {
      &_row {
        height: auto;
        display: block;
        padding-top: 2.6rem;
        padding-bottom: 2.6rem;
      }
      &_content {
        @include flex(column, center, center);
        gap: 2rem;
      }
      &_title {
        margin-bottom: 2rem;
      }
      &_item {
        &:last-child {
          @include flex(column, center, center);
          text-align: center;
          gap: 3.5rem;
        }
      }
      &_list {
        @include font(1.5rem, 1.5rem, 0, 400);
        margin-bottom: 1.2rem;
      }
    }
  }
</style>
