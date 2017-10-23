<template>
  <div v-on:click="addActiveClass" :class="open ? 'open section click-section' : 'closed section click-section' ">
    <h2>Click</h2>
  </div>
</template>

<script>

export default {
  name: 'clickSection',
  data () {
    return {
      isActive: false,
      open: true,
      sectionNo: 0
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
.click-section {
  background: #bbbbbb;
  min-height: 100%;
  width: calc(100% - 180px);
  position: absolute;
  left: 0;
  transition: all 0.5s linear;
}
</style>
