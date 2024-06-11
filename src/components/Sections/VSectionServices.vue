<template>
  <section class="services">
    <VContainer width="120rem">
      <div class="services_row">
        <div class="services_item">
          <div class="services_rotate">
            <ACircling />
          </div>
          <div class="services_title">
            <VHtag tag="h3" size="xl">
              <div>Pro Access.</div>
              <div>
                huge library of 3d illustrations. 1000+ assets and regular releases
              </div>
            </VHtag>
          </div>
          <button class="services_btn">Try, from $23/month</button>
        </div>
      </div>
    </VContainer>
  </section>
</template>

<script setup>
  import VContainer from '@comps/UI/Container/VContainer.vue';
  import ACircling from '@comps/UI/Animation/ACircling.vue';
  import VHtag from '@comps/UI/Htag/VHtag.vue';
</script>

<style lang="scss" scoped>
  .services {
    &_row {
      min-height: 65rem;
    }
    &_item {
      @include flex(column, '', center);
    }
    &_rotate {
      @include flex(row, center);
      margin-bottom: 2rem;
    }
    &_title {
      text-align: center;
      margin-bottom: 5.5rem;
    }
    &_btn {
      @include font(2.4rem, 3rem, 0, 300);
      padding: 1.5rem 3.3rem;
      background: $pureLinear;
      text-transform: uppercase;
      border-radius: 10rem;
      color: $white;
      cursor: pointer;
    }
  }
  @include media('max', 'lg') {
    .services {
      &_row {
        min-height: 45rem;
      }
    }
  }
  @include media('max', 'sm') {
    .services {
      &_row {
        min-height: 35rem;
      }
      &_btn {
        padding: 1.4rem 1.6rem;
        @include font(1.4rem, 1.4rem, 0, 300);
      }
    }
  }
</style>
