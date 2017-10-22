<template>
  <div id="app">
    <div class="sections">
      <clickSection v-on:clicked="addActiveClass"></clickSection>
      <hoverSection v-on:clicked="addActiveClass"></hoverSection>
      <scrollSection v-on:clicked="addActiveClass"></scrollSection>
      <frontPage v-on:clicked="addActiveClass"></frontPage>
    </div>
  </div>
</template>

<script>
import clickSection from './components/Click.vue';
import hoverSection from './components/Hover.vue';
import scrollSection from './components/Scroll.vue';
import frontPage from './components/Front.vue';

export default {
    name: 'app',
    components: {
      clickSection,
      hoverSection,
      scrollSection,
      frontPage
    },
    methods: {
      addActiveClass(clickedSection) {
        console.log(clickedSection);
      }
    }
}
</script>

<style lang="scss">
.sections {
  min-height: 100%;
  width: 100vw;
  overflow: hidden;
  .active-section {
    transform: translateX(calc(100%-60px));
    transition: all 0.5s linear;
  }
}
</style>
