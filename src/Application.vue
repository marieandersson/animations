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
      const slugs = ['/', 'scroll', 'hover', 'click']; // change hover slug on mobile?
      const section = event.target.dataset.section;
      window.history.pushState(section, null, `${slugs[section]}`);
      Event.$emit('sectionClicked', section);
    }
  }
}
</script>

<style lang="scss">
nav {
  position: fixed;
  height: 100vh;
  width: 40px;
  z-index: 10000;
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
    background: #000;
    p {
      color: #fff;
    }
  }
  .scroll-nav {
    background: #ff8784;
    p {
      color: #fff;
    }
  }
  .hover-nav {
    background: #fff;
    p {
      color: #ff3f34;
    }
  }
  .click-nav {
    background: #ff3f34;
  }
}
.sections {
  min-height: 100%;
  width: 100vw;
  overflow: hidden;
  .section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: calc(100% - 40px);
    position: absolute;
    left: 40px;
    transition: transform .2s linear;
    transition-delay: .5s;
    transform: translateX(-100%);
    z-index: 5;
  }
  .section.open {
    transform: translateX(0);
    transition: transform .5s linear;
    transition-delay: 0;
    z-index: 6;
  }
}
</style>
