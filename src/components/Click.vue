<template>
  <div :class="open ? 'open section click-section' : 'section click-section' ">
    <h2>Click</h2>
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
  background: lightyellow;
  min-height: 100%;
  width: calc(100% - 40px);
  position: absolute;
  left: 40px;
  transition: all 0.5s linear;
}
</style>
