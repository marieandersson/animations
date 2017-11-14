<template>

    <div v-on:click="clickAnimate" class="eyes">
      <div v-for="n in 2" class="eye">
        <div class="eye-rotate">
          <div class="inner-eye">
            <div class="pupil">
            </div>
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
      // calculate on the cursors position relative to the eyes center
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
      const norm = {  x: vector.x / distance, y: vector.y / distance };
      // set animation translate values
      const transInnerEye = {
        x: norm.x * 50,
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

        innerEye.style.transform = `translate(${transInnerEye.x}%, ${transInnerEye.y}%) `;
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
        for (let i = 0; i < this.eyes.length; i++) {
          const eye = this.eyes[i];
          const innerEye = eye.querySelector('.inner-eye');
          const pupil = eye.querySelector('.pupil');
          // set eyes back to default position
          innerEye.style.transform = 'translate(0, 0)';
          pupil.style.transform = 'translate(0,0)';
        }
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
  overflow: hidden;
  position: absolute;
  .eye {
    background-clip: content-box, border-box;
    background-origin: border-box;
    border-radius: 75% 1%;
    border: double 10px transparent;
    height: 200px;
    margin: 50px;
    overflow: hidden;
    position: relative;
    transform: rotate(45deg);
    width: 200px;
    // rotate back to give inner eye the right x and y axel on hover animation
    .eye-rotate {
      height: 100%;
      position: absolute;
      transform: rotate(-45deg);
      width: 100%;
    }
    .inner-eye {
      border-radius: 50%;
      display: block;
      height: 120px;
      margin: 30px;
      position: absolute;
      width: 120px;
      .pupil {
        background: #090909;
        border-radius: 50%;
        display: block;
        height: 30px;
        margin: 44px;
        position: absolute;
        width: 30px;
      }
    }
    &::after {
      background-clip: content-box, border-box;
      background-origin: border-box;
      border-radius: 0;
      content: '';
      height: 500px;
      margin: -130px 0 0 -30px;
      opacity: 1;
      position: absolute;
      transform: translate(-250px, -250px) rotate(45deg);
      transition: transform .4s linear, border-radius .3s ease-in;
      width: 300px;
    }
  }
}
.click .eye {
  cursor: pointer;
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
