<template>
  <div class="full-animation-one">
    <eyes></eyes>
  </div>
</template>

<script>
import eyes from '../animations/Eyes.vue';
export default {
  name: 'fullAnimationOne',
  components: {
    eyes
  }

}
</script>

<style lang="scss">
.full-animation-one {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
