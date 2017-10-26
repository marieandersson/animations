<template>
  <div :class="open ? 'open' : '' " class="section front-section" data-sec="0">
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
      if (sectionClicked == this.sectionNo) {
        this.open = true;
      } else {
        this.open = false;
      }
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
