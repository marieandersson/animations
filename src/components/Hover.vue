<template>
  <div :class="open ? 'open' : '' " class="section hover-section" data-sec="2">
    <div class="section-content">
      <h2>Hover</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hoverSection',
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
  z-index: 10 !important;
  h2 {
    color: #ff3f34;
  }
}
</style>
