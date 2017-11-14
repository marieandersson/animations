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
  height: 500px;
  padding: 5em;
  margin: 200px 0 350px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media screen and (max-width: 1400px) {
  .full-animation-one {
    margin: 100px 0 200px;
  }
}
@media screen and (max-width: 1200px) {
  .full-animation-one {
    margin: 100px 0 100px;
  }
}
@media screen and (max-width: 970px) {
  .full-animation-one {
    justify-content: center;
    margin-bottom: 70px;
  }
}
@media screen and (max-width: 850px) {
  .full-animation-one {
    margin: 50px 0 50px;
  }
}
@media screen and (max-width: 690px) {
  .full-animation-one {
    margin: 350px 0 50px;
  }
}
@media screen and (max-width: 590px) {
  .full-animation-one {
    margin: 200px 0 50px;
  }
}
@media screen and (max-width: 450px) {
  .full-animation-one {
    margin: 80px 0 0;
  }
}
</style>
