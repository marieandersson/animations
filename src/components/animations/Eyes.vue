<template>
  <div class="eyes">
    <div class="eye">
    </div>
    <div class="eye">
    </div>
  </div>
</template>

<script>
export default {
name: 'eyes'
}

</script>


<style lang="scss">
.eyes {
  display: flex;
  flex-direction: row;

  .eye {
    width: 300px;
    height: 300px;
    border: double 10px transparent;
    border-radius: 75% 1%;
    background-origin: border-box;
    background-clip: content-box, border-box;
    transform: rotate(45deg);
    &::after {
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
    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      top: 3px;
      margin: 60px;
    }
  }
  // .eye2 {
  //   position: absolute;
  //   width: 300px;
  //   height: 300px;
  //   border: double 10px transparent;
  //   border-radius: 75% 1%;
  //   background-image: radial-gradient(circle at top left, #ff0098,#f40000);
  //   transform: rotate(45deg);
  //   opacity: 0.0;
  // }
  // .eye:hover + .eye2 {
  //     opacity: 1.0;
  // }
}
.start .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #e6e6e6, #000000);
  &::before {
    background: radial-gradient(circle at top left, #e6e6e6, #000000);
  }
}
.scroll .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #FF0098, #F40000);
  &::before {
    background: radial-gradient(circle at top left, #FF0098, #F40000);
  }
}
.hover .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #FF8B00, #EE3F00);
  &::before {
    background: radial-gradient(circle at top left, #FF8B00, #EE3F00);
  }
}
.click .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #1808EF, #001F44);
  &::before {
    background: radial-gradient(circle at top left, #1808EF, #001F44);
  }
}
</style>
