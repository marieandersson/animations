<template>
  <div v-on:click="addActiveClass" :class="isActive ? 'active-section section click-section' : 'section click-section' ">
    <h2>Click</h2>
  </div>
</template>

<script>

export default {
  name: 'clickSection',
  data () {
    return {
      isActive: false,
      sectionName: 'clickSection'
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
.click-section {
  background: #143A52;
  min-height: 100%;
  width: calc(100% - 180px);
  position: absolute;
  left: 0;
  transition: all 0.5s linear;
}
</style>
