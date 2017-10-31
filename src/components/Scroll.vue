<template>
  <div :class="open ? 'open' : '' " class="section scroll-section" data-sec="1">
    <div class="section-content">
      <scrollHeader></scrollHeader>
      <scrollAbout></scrollAbout>
    </div>
  </div>
</template>

<script>
import scrollHeader from './scrollContent/ScrollHeader.vue';
import scrollAbout from './scrollContent/ScrollAbout.vue';

export default {
  name: 'scrollSection',
  components: {
    scrollHeader,
    scrollAbout
  },
  data () {
    return {
      open: false,
      sectionNo: 1
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
.scroll-section {

}
</style>
