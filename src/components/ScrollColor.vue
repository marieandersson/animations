<template>
  <div :class="open ? 'open' : '' " class="section scroll-section-color" data-sec="0">
  </div>
</template>

<script>

export default {
  name: 'scrollSectionColor',
  data () {
    return {
      open: true,
      sectionNo: 0
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
.scroll-section-color {
  background: #ff8784;
}

</style>
