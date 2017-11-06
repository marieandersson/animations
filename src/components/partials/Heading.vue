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
  padding-left: 5em;
}
@media screen and (max-width: 1440px) {
  header {
    height: 60vh;
    margin-bottom: 100px;
  }
}
@media screen and (max-width: 1250px) {
  header {
    height: 55vh;
  }
}
@media screen and (max-width: 1000px) {
  header {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 900px) {
  header {
    height: 45vh;
  }
}
@media screen and (max-width: 680px) {
  header {
    height: 90vh;
  }
}
@media screen and (max-width: 680px) {
  header {
    height: 85vh;
  }
}
@media screen and (max-width: 520px) {
  header {
    height: 80vh;
  }
}
@media screen and (max-width: 480px) {
  header {
    height: 90vh;
  }
}
@media screen and (max-width: 320px) {
  header {
    height: 100vh;
  }
}
</style>
