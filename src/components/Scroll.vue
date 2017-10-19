<template>
  <div @click="addActiveClass" :class="isActive ? 'active-section section scroll-section' : 'section scroll-section' ">
    <h2>Scroll</h2>
  </div>
</template>

<script>
export default {
  name: 'scrollSection',
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
.scroll-section {
  background: #CDE3EB;
  min-height: 100%;
  flex: 1;
  transition: all 0.5s linear;
}
</style>
