<template>
  <div v-on:mouseover="hoverAnimate" v-on:mouseleave="stopAnimate" class="header-wrap">
    <header>
     <headingText></headingText>
    </header>
  </div>
</template>

<script>
import headingText from '../animations/HeadingText.vue';

export default {
  name: 'heading',
  components: {
    headingText
  },
  methods: {
    hoverAnimate() {
      Event.$emit('headerHover');
    },
    stopAnimate() {
      Event.$emit('headerLeave');
    }
  }
}
</script>

<style lang="scss">
header {
  width: 100%;
  height: 400px;
  margin:0 0 500px 0;
  transform: translateX(30%);
}
@media screen and (max-width: 1440px) {
  header {
    height: 340px;
    margin-bottom: 300px;
  }
}
@media screen and (max-width: 1250px) {
  header {
    height: 345px;
    margin-bottom: 180px;
  }
}
@media screen and (max-width: 900px) {
  header {
    height: 320px;
    margin-bottom: 130px;
    transform: translateX(40%);
  }
}
@media screen and (max-width: 800px) {
  header {
    height: 250px;
    margin-bottom: 100px;
    transform: translateX(45%);
  }
}
@media screen and (max-width: 690px) {
  header {
    margin-bottom: 500px;
  }
}
@media screen and (max-width: 570px) {
  header {
    margin-bottom: 420px;
    transform: translateX(50%);
  }
}
@media screen and (max-width: 400px) {
  header {
    height: 170px;
    margin-bottom: 430px;
  }
}
@media screen and (max-width: 360px) {
  header {
    margin-bottom: 350px;
  }
}

</style>
