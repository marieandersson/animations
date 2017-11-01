<template>
  <div :class="open ? 'open' : '' " class="section color-section click-section-color" data-sec="3">
  </div>
</template>

<script>

export default {
  name: 'clickSectionColor',
  data () {
    return {
      open: false,
      sectionNo: 3
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
.click-section-color {
  background: #E6E6E6;
}

</style>
