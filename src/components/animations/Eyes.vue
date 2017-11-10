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
name: 'eyes',
data () {
  return {
    activeState: 'start'
  }
},
methods: {
  scrollAnimate() {
    if (this.$el.getBoundingClientRect().top < window.innerHeight / 3) {
      this.$el.classList.add('closed-eyes');
    } else {
      this.$el.classList.remove('closed-eyes');
    }
  }
},
created () {
  Event.$on('scrolling', () => {
    this.scrollAnimate();
  });
}
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
    overflow: hidden;
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
        width: 30px;
        height: 30px;
        background: #090909;
        border-radius: 50%;
        margin: 44px;
      }
    }
    &::after {
      content: '';
      position: absolute;
      width: 300px;
      height: 500px;
      margin: -130px 0 0 -30px;
      opacity: 1;
      border-radius: 0;
      background-origin: border-box;
      background-clip: content-box, border-box;
      transition: transform .4s linear, border-radius .3s ease-in;
      transform: translate(-250px, -250px) rotate(45deg);
    }
  }
}
.closed-eyes {
  .eye::after {
    border-radius: 0 50% 50% 0;
    transform: translate(-50px, -50px) rotate(45deg);
  }
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
    background-image: linear-gradient(to left, #f40000, #ff0098 50%);
  }
}
.hover .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #FF8B00, #EE3F00);
  .inner-eye{
    background: radial-gradient(circle at top left, #FF8B00, #EE3F00);
  }
  &::after {
    background-image: linear-gradient(to left,#EE3F00, #FF8B00);
  }
}
.click .eyes .eye {
  background-image: linear-gradient(white, white), radial-gradient(circle at top left, #1808EF, #001F44);
  .inner-eye {
    background: radial-gradient(circle at top left, #1808EF, #001F44);
  }
  &::after {
    background-image: linear-gradient(to left, #001F44, #1808EF);
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
