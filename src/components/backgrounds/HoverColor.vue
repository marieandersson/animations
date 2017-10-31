<template>
  <div :class="open ? 'open' : '' " class="section color-section hover-section-color" data-sec="2">
  </div>
</template>

<script>

export default {
  name: 'hoverSectionColor',
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
.hover-section-color {
  background: #fff;
}

</style>
