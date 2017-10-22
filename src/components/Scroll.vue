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
      isActive: false,
      sectionName: 'scrollSection'
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
.scroll-section {
  background: #CDE3EB;
  min-height: 100%;
  width: calc(100% - 180px);
  position: absolute;
  left: 120px;
  transition: all 0.5s linear;
}
</style>
