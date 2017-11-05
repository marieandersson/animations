<template>
  <header>
   <headingText></headingText>
  </header>
</template>

<script>
import headingText from '../animations/HeadingText.vue';

export default {
  name: 'heading',
  components: {
    headingText
  }
}
</script>

<style lang="scss">
header {
  width: 100%;
  height: 100vh;
  margin: 0;
}
@media screen and (max-width: 1440px) {
  header {
    height: 75vh;
  }
}
</style>
