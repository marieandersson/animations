<template>
  <main v-bind:class="activeState">
    <div class="content-wrap">
      <heading></heading>
      <about></about>
      <fullAnimationOne></fullAnimationOne>
      <how></how>
      <ux></ux>
      <videoSection></videoSection>
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
      // this.lastScrollTime = Date.now();
      Event.$emit('scrolling');
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
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
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 60px);
  position: absolute;
  overflow: hidden;
  left: 60px;
  z-index: 11;
  .content-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
@media screen and (max-width:600px) {
  main {
    width: calc(100% - 40px);
    left: 40px;
  }
}
</style>
