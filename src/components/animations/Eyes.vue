<template>

    <div v-on:click="clickAnimate" class="eyes">
      <div v-for="n in 2" class="eye">
        <div class="inner-eye">
          <div class="pupil">
          </div>
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
    },
    hoverAnimate() {
      const cursor = {
        x: event.clientX,
        y: event.clientY
      }
      const rect = this.$el.getBoundingClientRect();
      const eyesCenter = {
        x: rect.x + (rect.width / 2),
        y: rect.y + (rect.height / 2)
      }
      const vector = {
        x: cursor.x - eyesCenter.x,
        y: cursor.y - eyesCenter.y
      }
      const distance = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));

      const norm = {  x: vector.x / distance, y: vector.y /distance };
      const transInnerEye = {
        x: norm.x * 20,
        y: norm.y * 10
      }
      const transPupil = {
        x: norm.x * 80,
        y: norm.y * 80
      }
      for (let i = 0; i < this.eyes.length; i++) {
        const eye = this.eyes[i];
        const innerEye = eye.querySelector('.inner-eye');
        const pupil = eye.querySelector('.pupil');

        innerEye.style.transform = `translate(${transInnerEye.x}%, ${transInnerEye.y}%)`;
        pupil.style.transform = `translate(${transPupil.x}%, ${transPupil.y}%)`;
      }
    },
    clickAnimate() {
      if (this.activeState === 'click') {
        this.$el.classList.add('blink');
        this.$el.addEventListener('animationend', () => {
          this.$el.classList.remove('blink');
        });
      }
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      if (clickedNavItem != 'scroll') {
        this.$el.classList.remove('closed-eyes');
      }
      if (clickedNavItem === 'hover') {
        document.body.addEventListener('mousemove', this.hoverAnimate);
      } else {
        document.body.removeEventListener('mousemove', this.hoverAnimate);
      }
    });
    Event.$on('scrolling', () => {
      this.scrollAnimate();
    });
  },
  mounted () {
    this.eyes = this.$el.children;
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
      .pupil {
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
@keyframes blink {
  from {
    border-radius: 0;
    transform: translate(-250px, -250px) rotate(45deg);
  }
  to {
    border-radius: 0 50% 50% 0;
    transform: translate(-50px, -50px) rotate(45deg);
  }
}
.blink {
  .eye::after {
  animation: .5s ease-in-out 2 alternate blink;
  }
}
.closed-eyes {
  .eye::after {
    border-radius: 0 50% 50% 0;
    transform: translate(-50px, -50px) rotate(45deg);
  }
}

// color set per state
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
