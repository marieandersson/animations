<template>
  <div :class="open ? 'open' : '' " class="section scroll-section">
    <h2>Scroll</h2>
  </div>
</template>

<script>
export default {
  name: 'scrollSection',
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
        // window.history.pushState(sectionClicked, null, '/scroll');
      } else {
        this.open = false;
      }
    });
  }
}
</script>

<style lang="scss">
.scroll-section {
  background: #ff8784;
  h2 {
    color: #fff;
  }
}
</style>
