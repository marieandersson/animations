<template>
  <main v-bind:class="activeState">
    <div v-if="activeState === 'hover' && isTouchScreen" class="hover-alert">
      <p>Oh crap! Hover interactions don't work on this device. Get the whole experience on your computer.</p>
    </div>
    <div class="content-wrap">
      <heading></heading>
      <about></about>
      <fullAnimationOne></fullAnimationOne>
      <how></how>
      <ux></ux>
    </div>
  </main>
</template>

<script>
import heading from './partials/Heading.vue';
import about from './partials/About.vue';
import how from './partials/How.vue';
import fullAnimationOne from './partials/FullAnimationOne.vue';
import ux from './partials/Ux.vue';

export default {
  name: 'mainSection',
  components: {
    heading,
    about,
    how,
    fullAnimationOne,
    ux
  },
  data () {
    return {
      activeState: 'start',
      lastScrollTime: null,
      isTouchScreen: false
    }
  },
  methods: {
    detectScrolling () {
      Event.$emit('scrolling');
    },
    // check ig user is on touch screen, then disable hover section
    getScreen () {
      if (navigator.userAgent.match(/mobile/i)) {
        this.isTouchScreen = true;
      } else if (navigator.userAgent.match(/iPad|Android|Touch/i)) {
        this.isTouchScreen = true;
      } else {
        this.isTouchScreen = false;
      }
    }
  },
  created () {
    this.getScreen();
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      this.contentWrap.classList.add('fade-in');
      this.contentWrap.addEventListener('animationend', () => {
        this.contentWrap.classList.remove('fade-in');
        this.contentWrap.classList.remove('fade-out');
      })
      if (this.activeState === 'scroll') {
        window.addEventListener('scroll', this.detectScrolling);
      } else {
        window.removeEventListener('scroll', this.detectScrolling);
      }
    });
  },
  mounted () {
    this.contentWrap = this.$el.querySelector('.content-wrap');
  }
}
</script>

<style lang="scss">
@keyframes fadeIn {
  0% {
    filter: opacity(0);
  }
  100% {
    filter: opacity(1);
  }
}
@keyframes fadeOut {
  0% {
    filter: opacity(1);
  }
  100% {
    filter: opacity(0);
  }
}
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 60px;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  transition: .5s linear;
  width: calc(100% - 60px);
  z-index: 11;
  .content-wrap {
    width: 100%;
  }
  .hover-alert {
    background: rgba(255, 255, 255, 0.9);
    border: 5px solid #FF8B00;
    height: 80%;
    padding: 1em;
    position: fixed;
    right: 5%;
    top: 10%;
    width: 80%;
    z-index: 1000;
    p {
      font-size: 20px;
    }
  }
}
.fade-in {
  animation: .5s ease-in fadeIn;
  filter: opacity(1);
}
.fade-out {
  animation: .2s ease-out fadeOut;
  filter: opacity(0);
}
@media screen and (max-width:600px) {
  main {
    left: 40px;
    width: calc(100% - 40px);
  }
}
</style>
