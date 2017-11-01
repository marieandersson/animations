<template>
  <div id="app">
    <nav>
      <div data-state="0" v-on:click="openSection" class="start-nav" v-bind:class="{ startActive ? 'active' : '' }"><p data-state="0">Start</p></div>
      <div data-state="1" v-on:click="openSection" class="scroll-nav"><p data-state="1">Scroll</p></div>
      <div data-state="2" v-on:click="openSection" class="hover-nav"><p data-state="2">Hover</p></div>
      <div data-state="3" v-on:click="openSection" class="click-nav"><p data-state="3">Click</p></div>
    </nav>
    <background></background>
    <mainSection></mainSection>
  </div>
</template>

<script>
import background from './components/animations/Background.vue';
import mainSection from './components/Main.vue';


let menuClickable = true;
const slugs = ['/', 'scroll', 'hover', 'click']; // change hover slug on mobile?

export default {
  name: 'app',
  components: {
    background,
    mainSection
  },
  data () {
    return {
      startActive: true
    }
  },
  methods: {
    openSection() {
      const clickedSection = event.target.dataset.state;
      event.target.classList.add('open');
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
  width: 60px;
  z-index: 12;
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
    background: linear-gradient(#1808EF, #001F44);
    p {
      color: #fff;
    }
  }
  .scroll-nav {
    background: linear-gradient(#F40000, #FF0098);
    p {
      color: #fff;
    }
  }
  .hover-nav {
    background: linear-gradient(#FF8B00, #EE3F00);
    p {
      color: #fff;
    }
  }
  .click-nav {
    background: linear-gradient(#1808EF, #001F44);
    p {
      color: #fff;
    }
  }
}
// .sections {
//   width: 100vw;
//   overflow: hidden;
//   min-height: 400vh;
//   .section {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     width: calc(100% - 40px);
//     position: absolute;
//     left: 40px;
//     transition: transform .2s linear .5s;
//     transform: translateX(-100%);
//     z-index: 6;
//     .section-content {
//       padding: 1em 10%;
//       opacity: 0;
//       display: flex;
//       flex-direction: column;
//       width: 100%;
//       transition: opacity .2s linear;
//     }
//   }
//   .color-section {
//     z-index: 5;
//   }
//   .section.open {
//     transform: translateX(0);
//     transition: transform .5s linear;
//     z-index: 11;
//     .section-content {
//       opacity: 1;
//       transition: none;
//     }
//   }
//   .color-section.open {
//     z-index: 9;
//   }
// }
</style>
