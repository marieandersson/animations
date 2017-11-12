<template>
  <main v-bind:class="activeState">
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
      lastScrollTime: null
    }
  },
  methods: {
    detectScrolling() {
      Event.$emit('scrolling');
    }
  },
  created () {
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
