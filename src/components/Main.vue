<template>
  <main v-bind:class="activeState">
    <div class="content-wrap">
      <heading></heading>
      <about></about>
      <fullAnimationOne></fullAnimationOne>
      <how></how>
      <fullAnimationTwo></fullAnimationTwo>
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
import fullAnimationTwo from './partials/FullAnimationTwo.vue';

export default {
  name: 'mainSection',
  components: {
    heading,
    about,
    how,
    fullAnimationOne,
    ux,
    fullAnimationTwo
  },
  data () {
    return {
      activeState: 'start'
    }
  },
  created () {
    Event.$on('sectionClicked', clickedNavItem => {
      this.activeState = clickedNavItem;
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
  left: 60px;
  z-index: 11;
  .content-wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}

</style>
