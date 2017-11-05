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
  border-bottom: 1px solid black;
  margin: 0;
}

</style>
