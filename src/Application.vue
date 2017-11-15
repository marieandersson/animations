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
    setActive(navItemName) {
      this.activeState = navItemName;
      let slug = navItemName;
      window.history.pushState(navItemName, null, slug);
      // fade out content before switching state
      this.fadeOut(() => {
        Event.$emit('activeState', navItemName);
      })
    },
    isActive(navItemName) {
      return this.activeState === navItemName;
    },
    fadeOut(callback) {
      document.querySelector('.content-wrap').classList.add('fade-out');
      setTimeout( function () {
        callback();
        document.querySelector('.content-wrap').classList.remove('fade-out');
      }, 200);
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
  }
}
</script>

<style lang="scss">
nav {
  background: #e6e6e6;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 60px;
  z-index: 12;
  .nav-item {
    align-items: center;
    background: transparent;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;
    width: 100%;
    p {
      font-family: 'Poppins' !important;
      font-weight: 300;
      margin: 0;
      text-transform: uppercase;
      transform: rotate(-90deg);
      transition: all .5s linear;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    &::before {
      content: '';
      height: 100%;
      overflow: hidden;
      position: absolute;
      right: 0;
      transition: .3s linear;
      width: 0;
    }
    &::after {
      content: '';
      height: 100%;
      position: absolute;
      right: 0;
      transform: scaleY(0);
      transition: .3s linear;
      width: 5px;
      z-index: -1;
    }
    &:hover::after {
      transform: scaleY(1);
    }
  }

  .start-nav {
    p {
      color: #000;
    }
    &::before, &::after {
      background: linear-gradient(#e6e6e6, #000000);
    }
  }
  .scroll-nav {
    p {
      color: #FF0098;
    }
    &::before, &::after {
      background: linear-gradient(#FF0098, #F40000);
    }
  }
  .hover-nav {
    p {
      color: #EE3F00;
    }
    &::before, &::after {
      background: linear-gradient(#FF8B00, #EE3F00);
    }
  }
  .click-nav {
    p {
      color: #1808EF;
    }
    &::before, &::after {
      background: linear-gradient(#1808EF, #001F44);
    }
  }
  .active.nav-item {
    &::before {
      width: 100%;
    }
    p {
      color: #fff;
    }
  }
} // end nav
@media screen and (max-width:600px) {
  nav {
    width: 40px;
  }
}
</style>
