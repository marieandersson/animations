<template>
  <div id="app">
    <nav>
      <div v-for="item in navItems" :data-state="item.state" v-on:click="openSection(item.name)" :class="['nav-item', item.class, isActive(item.name) ? 'active' : '']" >
        <p :data-state="item.state">{{ item.name }}</p>
      </div>
    </nav>
    <background></background>
    <mainSection></mainSection>
  </div>
</template>

<script>
import background from './components/animations/Background.vue';
import mainSection from './components/Main.vue';

const slugs = ['/', 'scroll', 'hover', 'click'];

export default {
  name: 'app',
  components: {
    background,
    mainSection
  },
  data () {
    return {
      navItems: {
        start: {
          name: 'start',
          class: 'start-nav',
          state: 0
        },
        scroll: {
          name: 'scroll',
          class: 'scroll-nav',
          state: 1
        },
        hover: {
          name: 'hover',
          class: 'hover-nav',
          state: 2
        },
        click: {
          name: 'click',
          class: 'click-nav',
          state: 3
        },
      },
      activeItem: 'start'
    }
  },
  methods: {
    openSection(navItem) {
      this.activeItem = navItem;
      const clickedSection = event.target.dataset.state;
      window.history.pushState(clickedSection, null, `${slugs[clickedSection]}`);
      Event.$emit('sectionClicked', clickedSection);
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
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
