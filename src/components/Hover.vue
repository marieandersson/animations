<template>
  <div v-on:click="addActiveClass" :class="open ? 'open section hover-section' : 'closed section hover-section' ">
    <h2>Hover</h2>
  </div>
</template>

<script>
export default {
  name: 'hoverSection',
  data () {
    return {
      isActive: false,
      open: true,
      sectionNo: 1
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
.hover-section {
  background: #6E828A;
  min-height: 100%;
  width: calc(100% - 180px);
  position: absolute;
  left: 60px;
  transition: all 0.5s linear;
}
</style>
