<template>
  <div v-on:click="addActiveClass" :class="isActive ? 'active-section section front-section' : 'section front-section' ">
    <h2>Front Page</h2>
  </div>
</template>

<script>
export default {
  name: 'frontPage',
  data () {
    return {
      isActive: true,
      sectionName: 'frontPage'
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
.front-section {
  background: #E3EFF3;
  min-height: 100%;
  width: calc(100% - 180px);
  position: absolute;
  left: 180px;
  transition: all 0.5s linear;
}
</style>
