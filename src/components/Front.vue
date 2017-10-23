<template>
  <div :class="open ? 'open' : '' " class="section front-section">
    <h2>Front Page</h2>
  </div>
</template>

<script>
export default {
  name: 'frontPage',
  data () {
    return {
      open: true,
      sectionNo: 0
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      sectionClicked == this.sectionNo ? this.open = true : this.open = false;
    });
  }
}
</script>

<style lang="scss">
.front-section {
  background: #000;
  h2 {
    color: #fff;
  }
}

</style>
