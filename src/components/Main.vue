<template>
  <main v-bind:class="activeState">
    <div v-if="activeState === 'hover' && isTouchScreen" class="hover-alert">Oh no! Hover wont work on this device. Get the whole expericnce on your computer.</div>
    <div class="content-wrap">
      <heading></heading>
      <about></about>
      <fullAnimationOne></fullAnimationOne>
      <how></how>
      <ux></ux>
      <!-- <videoSection></videoSection> -->
    </div>
  </main>
</template>

<script>
import heading from './partials/Heading.vue';
import about from './partials/About.vue';
import how from './partials/How.vue';
import fullAnimationOne from './partials/FullAnimationOne.vue';
import ux from './partials/Ux.vue';
import videoSection from './partials/Video.vue';

export default {
  name: 'mainSection',
  components: {
    heading,
    about,
    how,
    fullAnimationOne,
    ux,
    videoSection
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
    console.log(this.isTouchScreen);
    Event.$on('activeState', clickedNavItem => {
      // this.$el.firstChild.classList.add('page-trans');
      // this.$el.firstChild.addEventListener('animationend', () => {
      //   this.$el.firstChild.classList.remove('page-trans');
      // })
      this.activeState = clickedNavItem;
      if (this.activeState === 'scroll') {
        window.addEventListener('scroll', this.detectScrolling);
      } else {
        window.removeEventListener('scroll', this.detectScrolling);
      }
    });
  }
}
</script>

<style lang="scss">
@keyframes pageTrans {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
main {
  display: flex;
  opacity: 1;
  transition: .5s linear;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 60px);
  position: absolute;
  overflow: hidden;
  left: 60px;
  z-index: 11;
  .content-wrap {
    width: 100%;
  }
  .hover-alert {
    position: fixed;
    height: 80%;
    width: 80%;
    top: 10%;
    right: 5%;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1000;
    border: 5px solid #FF8B00;
  }
}
.page-trans {
  animation: 1s ease-in-out pageTrans;
}
@media screen and (max-width:600px) {
  main {
    width: calc(100% - 40px);
    left: 40px;
  }
}
</style>
