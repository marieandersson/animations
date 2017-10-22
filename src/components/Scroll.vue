<template>
  <div v-on:click="addActiveClass" :class="open ? 'open section scroll-section' : 'closed section scroll-section' ">
    <h2>Scroll</h2>
  </div>
</template>

<script>
export default {
  name: 'scrollSection',
  data () {
    return {
      isActive: false,
      open: true,
      sectionNo: 2
    }
  },
  methods: {
    addActiveClass: function () {
      this.isActive = true;
      Event.$emit('sectionClicked', this.sectionNo);
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      if (sectionClicked < this.sectionNo) {
        this.open = false;
      } else {
        this.open = true;
      }
    });
  }
}
</script>

<style lang="scss">
.scroll-section {
  background: #CDE3EB;
  min-height: 100%;
  width: calc(100% - 180px);
  position: absolute;
  left: 120px;
  transition: all 0.5s linear;
}
</style>
