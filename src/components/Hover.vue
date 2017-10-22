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
      isActive: false
    }
  },
  methods: {
    addActiveClass: function (event) {
      this.$emit('clicked', event.target);
    }
  },
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
