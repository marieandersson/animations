<template>
  <div id="app">
    <h1>Animations</h1>
    <div class="sections">
      <clickSection v-on:click="addActiveClass"></clickSection>
      <hoverSection v-on:click="addActiveClass"></hoverSection>
      <scrollSection v-on:click="addActiveClass"></scrollSection>
    </div>
  </div>
</template>

<script>
import clickSection from './components/Click.vue';
import hoverSection from './components/Hover.vue';
import scrollSection from './components/Scroll.vue';

export default {
    name: 'app',
    components: {
      clickSection,
      hoverSection,
      scrollSection
    },
    methods: {
      addActiveClass(event) {
        console.log('test');
        event.target.classList.add('active-section');
      }
    }

}
</script>

<style lang="scss">
.sections {
  position: absolute;
  display: flex;
  flex-direction: row;
  min-height: 100%;
  width: 100%;
  .active-section {
    flex: 8;
    transition: all 0.5s linear;
  }
}
</style>
