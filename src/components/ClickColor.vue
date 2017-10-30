<template>
  <div :class="open ? 'open' : '' " class="section click-section-color" data-sec="0">
  </div>
</template>

<script>

export default {
  name: 'clickSectionColor',
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
.click-section-color {
  background: #ff3f34;
}

</style>
