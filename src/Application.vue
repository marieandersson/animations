<template>
  <div id="app">
    <nav>
      <div v-for="item in navItems" v-on:click="setActive(item.name)" :class="['nav-item', `${item.name}-nav`, isActive(item.name) ? 'active' : '']" >
        <p>{{ item.name }}</p>
      </div>
    </nav>
    <background></background>
    <mainSection></mainSection>
  </div>
</template>

<script>
import background from './components/animations/Background.vue';
import mainSection from './components/Main.vue';

export default {
  name: 'app',
  components: {
    background,
    mainSection
  },
  data () {
    return {
      navItems: [
        { name: 'start' },
        { name: 'scroll' },
        { name: 'hover' },
        { name: 'click' }
      ],
      activeState: 'start'
    }
  },
  methods: {
    setActive(navItem) {
      this.activeState = navItem;
      let slug = navItem;
      if (navItem === 'start') {
        slug = '/';
      }
      window.history.pushState(navItem, null, slug);
      Event.$emit('sectionClicked', navItem);
    },
    isActive(menuItem) {
      return this.activeState === menuItem;
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #f6f6f6;
  .nav-item {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s linear;
    background: transparent;
    p {
      transform: rotate(-90deg);
      margin: 0;
      text-transform: uppercase;
      font-family: 'Poppins' !important;
      font-weight: 300;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
  .start-nav p {
    color: #000;
  }
  .scroll-nav p {
    color: #FF0098;
  }
  .hover-nav p {
    color: #EE3F00;
  }
  .click-nav p {
    color: #1808EF;
  }
  .active.start-nav {
    transition: all .3s linear;
    background: linear-gradient(#e6e6e6, #000000);
    p {
      color: #fff;
    }
  }
  .active.scroll-nav {
    background: linear-gradient(#F40000, #FF0098);
    p {
      color: #fff;
    }
  }
  .active.hover-nav {
    background: linear-gradient(#FF8B00, #EE3F00);
    p {
      color: #fff;
    }
  }
  .active.click-nav {
    background: linear-gradient(#1808EF, #001F44);
    p {
      color: #fff;
    }
  }
}
</style>
