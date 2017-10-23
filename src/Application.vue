<template>
  <div id="app">
    <nav>
      <div data-section="0" v-on:click="openSection" class="start-nav"><p data-section="0">Start</p></div>
      <div data-section="1" v-on:click="openSection" class="scroll-nav"><p data-section="1">Scroll</p></div>
      <div data-section="2" v-on:click="openSection" class="hover-nav"><p data-section="2">Hover</p></div>
      <div data-section="3" v-on:click="openSection" class="click-nav"><p data-section="3">Click</p></div>
    </nav>
    <div class="sections">
      <frontPage></frontPage>
      <scrollSection></scrollSection>
      <hoverSection></hoverSection>
      <clickSection></clickSection>
    </div>
  </div>
</template>

<script>
import frontPage from './components/Front.vue';
import scrollSection from './components/Scroll.vue';
import hoverSection from './components/Hover.vue';
import clickSection from './components/Click.vue';

export default {
    name: 'app',
    components: {
      frontPage,
      scrollSection,
      hoverSection,
      clickSection
    },
    methods: {
      openSection() {
        Event.$emit('sectionClicked', event.target.dataset.section);
      }
    }
}
</script>

<style lang="scss">
nav {
  position: absolute;
  height: 100vh;
  width: 40px;
  z-index: 10;
  left: 0;
  top: 0;
  background: red;
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      transform: rotate(-90deg);
      margin: 0;
    }
  }
  .start-nav {
    background: lightblue;
  }
  .scroll-nav {
    background: lightpink;
  }
  .hover-nav {
    background: lightgreen;
  }
  .click-nav {
    background: lightyellow;
  }
}
.sections {
  min-height: 100%;
  width: 100vw;
  overflow: hidden;
}
</style>
