<template>
  <div @click="addActiveClass" :class="isActive ? 'active-section section hover-section' : 'section hover-section' ">
    <h2>Hover</h2>
  </div>
</template>

<script>
export default {
  name: 'hoverSection',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    addActiveClass: function () {
      this.isActive = !this.isActive;
    }
  },
}
</script>

<style lang="scss">
.hover-section {
  background: #6E828A;
  min-height: 100%;
  flex: 1;
  transition: all 0.5s linear;
}
</style>
