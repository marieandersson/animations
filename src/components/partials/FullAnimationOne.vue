<template>
  <div class="full-animation-one">
    <div class="eye-wrap">
      <div class="eye"></div>
      <div class="eye2"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'fullAnimationOne',

}
</script>

<style lang="scss">
.full-animation-one {
  border-bottom: 1px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .eye {

    width: 300px;
    height: 300px;
    border: double 10px transparent;
    border-radius: 75% 1%;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #ff0098,#f40000);
    background-origin: border-box;
    background-clip: content-box, border-box;
    transform: rotate(45deg);
  }
  .eye:after {
    content: '';
    display: block;
    position: absolute;
    width: 50px;
    height: 50px;
    background: #000;
    border: solid 1px #000;
    border-radius: 50%;
    left: 3px;
    top: 3px;
    margin: 125px;
  }
  .eye:before {
    content: '';
    display: block;
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-image: radial-gradient(circle at top left, #ff0098,#f40000);
    top: 3px;
    margin: 60px;

  }
  .eye2 {
    position: absolute;
    width: 300px;
    height: 300px;
    border: double 10px transparent;
    border-radius: 75% 1%;
    background-image: radial-gradient(circle at top left, #ff0098,#f40000);
    transform: rotate(45deg);
    opacity: 0.0;
  }
  .eye:hover + .eye2 {
      opacity: 1.0;
  }
}

</style>
