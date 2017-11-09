<template>

    <div class="eyes">
      <div v-for="n in 2" class="eye">
        <div class="inner-eye">
        </div>
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
  position: absolute;
  .eye {
    width: 200px;
    height: 200px;
    border: double 10px transparent;
    border-radius: 75% 1%;
    background-origin: border-box;
    background-clip: content-box, border-box;
    transform: rotate(45deg);
    margin: 50px;
    .inner-eye {
      display: block;
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 30px;
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 28px;
        height: 28px;
        background: #090909;
        border-radius: 50%;
        margin: 45px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 200px;
      height: 200px;
      border: double 10px transparent;
      border-radius: 75% 1%;
      opacity: 1;
      background-origin: border-box;
      background-clip: content-box, border-box;
      margin: -10px;
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
  .inner-eye {
    background: radial-gradient(circle at top left, #e6e6e6, #000000);
  }
}
.scroll .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #FF0098, #F40000);
  .inner-eye {
    background: radial-gradient(circle at top left, #FF0098, #F40000);
  }
  &::after {
    background-image: radial-gradient(circle at top left, #ff0098,#f40000);
  }
}
.hover .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #FF8B00, #EE3F00);
  .inner-eye{
    background: radial-gradient(circle at top left, #FF8B00, #EE3F00);
  }
  &::after {
    background-image: radial-gradient(circle at top left, #FF8B00, #EE3F00);
  }
}
.click .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #1808EF, #001F44);
  .inner-eye {
    background: radial-gradient(circle at top left, #1808EF, #001F44);
  }
  &::after {
    background-image: radial-gradient(circle at top left, #1808EF, #001F44);
  }
}
@media screen and (max-width: 780px) {
  .eye {
    margin: 0;
    &:first-child {
      display: none;
    }
  }
}
</style>
