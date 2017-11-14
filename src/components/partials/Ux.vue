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
  height: 780px;
  margin-top: 200px;
  position: relative;
  width: 100%;
}

@media screen and (max-width: 1250px) {
  .ux {
    height: 600px;
    margin-top: 100px;
  }
}
@media screen and (max-width: 1150px) {
  .ux {
    height: 800px;
    margin-top: 0;
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
