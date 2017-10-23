<template>
  <div :class="open ? 'open section scroll-section' : 'section scroll-section' ">
    <h2>Scroll</h2>
  </div>
</template>

<script>
export default {
  name: 'scrollSection',
  data () {
    return {
      open: false,
      sectionNo: 1
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
.scroll-section {
  background: lightpink;
  min-height: 100%;
  width: calc(100% - 40px);
  position: absolute;
  left: 40px;
  transition: all 0.5s linear;
}
.scroll-section.closed {
  transform: translateX(100%) translateX(-60px);
}
</style>
