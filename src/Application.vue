<template>
  <div id="app">
    <nav>
      <div data-state="0" v-on:click="openSection" class="start-nav" v-bind:class="activeState == 0 ? 'active' : '' ">
        <p data-state="0">Start</p>
      </div>
      <div data-state="1" v-on:click="openSection" class="scroll-nav" v-bind:class="activeState == 1 ? 'active' : '' ">
        <p data-state="1">Scroll</p>
      </div>
      <div data-state="2" v-on:click="openSection" class="hover-nav" v-bind:class="activeState == 2 ? 'active' : '' ">
        <p data-state="2">Hover</p>
      </div>
      <div data-state="3" v-on:click="openSection" class="click-nav" v-bind:class="activeState == 3 ? 'active' : '' ">
        <p data-state="3">Click</p>
      </div>
    </nav>
    <background></background>
    <mainSection></mainSection>
  </div>
</template>

<script>
import background from './components/animations/Background.vue';
import mainSection from './components/Main.vue';

const slugs = ['/', 'scroll', 'hover', 'click']; // change hover slug on mobile?

export default {
  name: 'app',
  components: {
    background,
    mainSection
  },
  data () {
    return {
      activeState: 0
    }
  },
  methods: {
    openSection() {
      const clickedSection = event.target.dataset.state;
      window.history.pushState(clickedSection, null, `${slugs[clickedSection]}`);
      Event.$emit('sectionClicked', clickedSection);
    }
  },
  created () {
    Event.$on('sectionClicked', clickedSection => {
        this.activeState = clickedSection;
    });
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #f6f6f6;
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
  .active.start-nav {
    background: linear-gradient(#e6e6e6, #000000);
    p {
      color: #fff;
    }
  }
  .active.scroll-nav {
    background: linear-gradient(#F40000, #FF0098);

  }
  .active.hover-nav {
    background: linear-gradient(#FF8B00, #EE3F00);


  }
  .active.click-nav {
    background: linear-gradient(#1808EF, #001F44);

  }
}
</style>
