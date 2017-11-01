<template>
  <div :class="open ? 'open' : '' " class="section front-section" data-sec="0">
    <div class="section-content">

    </div>
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

}

</style>
