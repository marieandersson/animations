<template>
  <div :class="open ? 'open' : '' " class="section hover-section-color" data-sec="0">
  </div>
</template>

<script>

export default {
  name: 'hoverSectionColor',
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
.hover-section-color {
  background: #fff;
}

</style>
