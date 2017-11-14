<template>
  <div class="ux">
    <roll></roll>
  </div>
</template>

<script>
import roll from '../animations/Roll.vue';

export default {
  name: 'ux',
  components: {
    roll
  }
}
</script>

<style lang="scss">
.ux {
  width: 100%;
  height: 760px;
  position: relative;
  margin-top: 200px;
}

@media screen and (max-width: 1250px) {
  .ux {
    margin-top: 100px;
    height: 600px;
  }
}
@media screen and (max-width: 1150px) {
  .ux {
    margin-top: 0;
    height: 800px;
  }
}
@media screen and (max-width: 1000px) {
  .ux {
    height: 650px;
  }
}
@media screen and (max-width: 400px) {
  .ux {
    height: 750px;
  }
}
</style>
