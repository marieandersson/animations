<template>
  <div @click="addActiveClass" :class="isActive ? 'active-section section click-section' : 'section click-section' ">
    <h2>Click</h2>
  </div>
</template>

<script>
export default {
  name: 'clickSection',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    addActiveClass: function () {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="scss">
.click-section {
  background: lightyellow;
  min-height: 100%;
  flex: 1;
  transition: all 0.5s linear;
}
</style>
