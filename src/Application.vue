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
      Event.$emit('activeState', navItem);
    },
    isActive(menuItem) {
      return this.activeState === menuItem;
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
  position: fixed;
  height: 100vh;
  width: 60px;
  z-index: 12;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: #e6e6e6;
  .nav-item {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    position: relative;
    p {
      transform: rotate(-90deg);
      transition: all .5s linear;
      margin: 0;
      text-transform: uppercase;
      font-family: 'Poppins' !important;
      font-weight: 300;
      &::first-letter {
        text-transform: uppercase;
      }
    }
    &::before {
      content: '';
      height: 100%;
      position: absolute;
      right: 0;
      width: 0;
      overflow: hidden;
      transition: .3s linear;
    }
    &::after {
      content: '';
      position: absolute;
      height: 100%;
      right: 0;
      width: 5px;
      z-index: -1;
      transform: scaleY(0);
      transition: .3s linear;
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
