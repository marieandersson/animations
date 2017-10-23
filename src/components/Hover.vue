<template>
  <div :class="open ? 'open' : '' " class="section hover-section">
    <h2>Hover</h2>
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
      sectionClicked == this.sectionNo ? this.open = true : this.open = false;
    });
  }
}
</script>

<style lang="scss">
.hover-section {
  background: #fff;
  h2 {
    color: #ff3f34;
  }
}
</style>
