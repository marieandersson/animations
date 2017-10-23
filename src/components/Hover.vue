<template>
  <div :class="open ? 'open section hover-section' : 'section hover-section' ">
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
  background: lightgreen;
  min-height: 100%;
  width: calc(100% - 40px);
  position: absolute;
  left: 40px;
  transition: all 0.5s linear;
}
.hover-section.closed {
  transform: translateX(100%) translateX(-60px);
}
</style>
