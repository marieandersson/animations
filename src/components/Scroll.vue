<template>
  <div v-on:click="addActiveClass" :class="isActive ? 'active-section section scroll-section' : 'section scroll-section' ">
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
    addActiveClass: function (event) {
      this.$emit('clicked', event.target);
    }
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
