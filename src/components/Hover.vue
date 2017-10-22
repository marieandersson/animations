<template>
  <div v-on:click="addActiveClass" :class="isActive ? 'active-section section hover-section' : 'section hover-section' ">
    <h2>Hover</h2>
  </div>
</template>

<script>
export default {
  name: 'hoverSection',
  data () {
    return {
      isActive: false,
      sectionName: 'hoverSection'
    }
  },
  methods: {
    addActiveClass: function () {
      this.isActive = true;
      Event.$emit('sectionClicked', this.sectionName);
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      if (sectionClicked != this.sectionName) {
        this.isActive = false;
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
