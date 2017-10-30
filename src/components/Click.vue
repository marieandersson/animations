<template>
  <div :class="open ? 'open' : '' " class="section click-section" data-sec="3">
    <div class="section-content">
      <h2>Click</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'clickSection',
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
.click-section {
}
</style>
