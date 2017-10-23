<template>
  <div :class="open ? 'open section front-section' : 'section front-section' ">
    <h2>Front Page</h2>
  </div>
</template>

<script>
export default {
  name: 'frontPage',
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
.front-section {
  background: lightblue;
  min-height: 100%;
  width: calc(100% - 40px);
  position: absolute;
  left: 40px;
  transition: all 0.5s linear;
}
.front-section.closed {
  transform: translateX(100%) translateX(-60px);
}
</style>
