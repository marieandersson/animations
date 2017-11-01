<template>
  <div :class="open ? 'open' : '' " class="section" data-sec="2">
    <div class="section-content">
      <heading></heading>
      <about></about>
      <how></how>
      <fullAnimationOne></fullAnimationOne>
      <ux></ux>
      <fullAnimationTwo></fullAnimationTwo>
    </div>
  </div>
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
      open: false,
      sectionNo: 2
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      if (sectionClicked == this.sectionNo) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  }
}
</script>

<style lang="scss">
.hover-section {

}
</style>
