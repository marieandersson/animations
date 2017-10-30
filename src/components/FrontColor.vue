<template>
  <div :class="open ? 'open' : '' " class="section front-section-color" data-sec="0">
  </div>
</template>

<script>

export default {
  name: 'frontPageColor',
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
.front-section-color {
  background: #000;
}

</style>
