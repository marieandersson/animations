<template>
  <div :class="open ? 'open' : '' " class="section hover-section" data-sec="2">
    <div class="section-content">
      <hoverHeader></hoverHeader>
      <hoverAbout></hoverAbout>
    </div>
  </div>
</template>

<script>
import hoverHeader from './hoverContent/HoverHeader.vue';
import hoverAbout from './hoverContent/HoverAbout.vue';

export default {
  name: 'hoverSection',
  components: {
    hoverHeader,
    hoverAbout
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
// Hide hover-section on mobile devices
// @media screen and (max-width: 400px)  {
//   .hover-section, .hover-nav {
//     display: none;
//   }
// }
</style>
