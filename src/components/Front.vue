<template>
  <div @click="addActiveClass" :class="isActive ? 'active-section section front-section' : 'section front-section' ">
    <h2>Front Page</h2>
  </div>
</template>

<script>
export default {
  name: 'frontPage',
  data () {
    return {
      isActive: true
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
.front-section {
  background: #E3EFF3;
  min-height: 100%;
  flex: 1;
  transition: all 0.5s linear;
}
</style>
