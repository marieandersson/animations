<template>
  <div id="app">
    <div class="sections">
      <clickSection></clickSection>
      <hoverSection></hoverSection>
      <scrollSection></scrollSection>
      <frontPage></frontPage>
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
    }
}
</script>

<style lang="scss">
.sections {
  min-height: 100%;
  width: 100vw;
  overflow: hidden;
}
</style>
