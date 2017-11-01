<template>
  <div id="app">
    <nav>
      <div data-section="0" v-on:click="openSection" class="start-nav"><p data-section="0">Start</p></div>
      <div data-section="1" v-on:click="openSection" class="scroll-nav"><p data-section="1">Scroll</p></div>
      <div data-section="2" v-on:click="openSection" class="hover-nav"><p data-section="2">Hover</p></div>
      <div data-section="3" v-on:click="openSection" class="click-nav"><p data-section="3">Click</p></div>
    </nav>
    <background></background>
    <div class="sections">
      <frontPage></frontPage>
      <frontPageColor></frontPageColor>
      <scrollSection></scrollSection>
      <scrollSectionColor></scrollSectionColor>
      <hoverSection></hoverSection>
      <hoverSectionColor></hoverSectionColor>
      <clickSection></clickSection>
      <clickSectionColor></clickSectionColor>
    </div>
  </div>
</template>

<script>
import frontPageColor from './components/backgrounds/FrontColor.vue';
import scrollSectionColor from './components/backgrounds/ScrollColor.vue';
import hoverSectionColor from './components/backgrounds/HoverColor.vue';
import clickSectionColor from './components/backgrounds/ClickColor.vue';
import background from './components/backgrounds/Background.vue';

import frontPage from './components/Front.vue';
import scrollSection from './components/Scroll.vue';
import hoverSection from './components/Hover.vue';
import clickSection from './components/Click.vue';

let menuClickable = true;
const slugs = ['/', 'scroll', 'hover', 'click']; // change hover slug on mobile?

export default {
  name: 'app',
  components: {
    frontPageColor,
    scrollSectionColor,
    hoverSectionColor,
    clickSectionColor,
    background,
    frontPage,
    scrollSection,
    hoverSection,
    clickSection
  },
  methods: {
    openSection() {
      const clickedSection = event.target.dataset.section;
      if (menuClickable) {
        menuClickable = false;
        window.history.pushState(clickedSection, null, `${slugs[clickedSection]}`);
        Event.$emit('sectionClicked', clickedSection);
      }
      // let section transition reach end before user can click menu again
      // TODO: check if this is the right way to go
      setTimeout(setBackClickable, 500);
      function setBackClickable () {
        menuClickable = true;
      }
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
  cursor: pointer;
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
  width: 100vw;
  overflow: hidden;
  height: 400vh;
  .section {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400vh;
    width: calc(100% - 40px);
    position: absolute;
    left: 40px;
    transition: transform .2s linear .5s;
    transform: translateX(-100%);
    z-index: 6;
    .section-content {
      padding: 1em 10%;
      opacity: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      transition: opacity .2s linear;
    }
  }
  .color-section {
    z-index: 5;
  }
  .section.open {
    transform: translateX(0);
    transition: transform .5s linear;
    z-index: 11;
    .section-content {
      opacity: 1;
      transition: none;
    }
  }
  .color-section.open {
    z-index: 9;
  }
}
</style>
