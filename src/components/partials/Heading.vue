<template>
  <header>
    <!-- <h1>animations</h1> -->
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
  margin: 0 0 370px;
}
@media screen and (max-width: 1440px) {
  header {
    margin-bottom: 270px;
  }
}
@media screen and (max-width: 1300px) {
  header {
    margin-bottom: 180px;
  }
}
@media screen and (max-width: 1150px) {
  header {
    margin-bottom: 50px;
  }
}
@media screen and (max-width: 1000px) {
  header {
    margin-bottom: 0;
  }
}
</style>
