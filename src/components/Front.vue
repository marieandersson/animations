<template>
  <div v-on:click="addActiveClass" :class="open ? 'open section front-section' : 'closed section front-section' ">
    <h2>Front Page</h2>
  </div>
</template>

<script>
export default {
  name: 'frontPage',
  data () {
    return {
      isActive: true,
      open: true,
      sectionNo: 3
    }
  },
  methods: {
    addActiveClass: function () {
      this.isActive = true;
      Event.$emit('sectionClicked', this.sectionNo);
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      if (sectionClicked < this.sectionNo) {
        this.open = false;
      } else {
        this.open = true;
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
