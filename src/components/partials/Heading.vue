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
  height: 900px;
  margin: 0;
  transform: translateX(20%);
}
@media screen and (max-width: 1440px) {
  header {
    height: 540px;
    margin-bottom: 100px;
  }
}
@media screen and (max-width: 1250px) {
  header {
    height: 495px;
  }
}
@media screen and (max-width: 1000px) {
  header {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 900px) {
  header {
    height: 350px;
  }
}
@media screen and (max-width: 690px) {
  header {
    height: 750px;
  }
}
@media screen and (max-width: 520px) {
  header {
    height: 650px;
  }
}
@media screen and (max-width: 400px) {
  header {
    height: 600px;
  }
}
@media screen and (max-width: 320px) {
  header {
    height: 550px;
  }
}

</style>
