<template>
  <div class="heading-wrap">
    <h1 v-if="activeState === 'start'">Inspiring<br>Animations</h1>
    <h1 v-else v-for="n in 25" v-on:click="clickAnimate" class="heading">{{ headingTexts[activeState ] }}</h1>
  </div>
</template>

<script>

export default {
  name: 'headingText',
  data () {
    return {
      activeState: 'start',
      headingTexts: {
        start: 'Inspiring',
        scroll: 'Scroll',
        hover: 'Hover',
        click: 'Click'
      },
      hoverHeader: {
        center: {
          x: 0,
          y: 0
        },
        vector: {
          x: 0,
          y: 0
        }
      },
      hoverActive: false
    }
  },
  methods: {
    scrollAnimate() {
      const rect = this.$el.parentElement.getBoundingClientRect();
      const windowheight = (window.innerHeight || document.documentElement.clientHeight);
      const scrollPercent = (window.scrollY / (rect.height * 1.5)) * 100;
      const translateY = scrollPercent;
      // if element is in viewport
      if (translateY <= 150) {
        for (let i = 0; i < this.headings.length; i++) {
          this.headings[i].style.transform = `translate(-50%, ${translateY}%)`;
        }
      }
    },
    hoverAnimate() {
      const cursor = {
        x: event.clientX,
        y: event.clientY
      }
      const vector = {
        x: cursor.x - this.headingCenter.x,
        y: cursor.y - this.headingCenter.y
      }
      const distance = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
      const trans = {
        x: Math.round(-50 + ((vector.x / distance) * 20)),
        y: Math.round((vector.y /distance) * 20)
      }
    //  console.log(trans);
      for (let i = 0; i < this.headings.length; i++) {
       this.headings[i].style.transform = `translate(${trans.x}%, ${trans.y}%)`;
      }

    },
    clickAnimate() {
      if (this.activeState != 'click') {
        return;
      }
      this.$el.querySelectorAll('.heading').forEach(heading => {
        heading.classList.add('h1-clicked');
        heading.addEventListener('animationend', () => {
          heading.classList.remove('h1-clicked');
        })
      });
    },
  },
  created () {

    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      if (clickedNavItem === 'hover') {
        this.headingCenter = {
          x: this.rect.x + (this.rect.width / 2),
          y: this.rect.y + (this.rect.height / 2)
        }
        document.body.addEventListener('mousemove', this.hoverAnimate);
       } else {
         document.body.removeEventListener('mousemove', this.hoverAnimate);
         // set header back in original position
         for (let i = 0; i < this.headings.length; i++) {
           this.headings[i].style.transform = `translate(-50%)`;
         }
      }

    });
    Event.$on('scrolling', () => {
      this.scrollAnimate();
    });
  },
  mounted () {
    this.headings = this.$el.children;
    this.headingFront = this.headings[this.headings.length - 1];
    this.rect = this.headingFront.getBoundingClientRect();
  }
}
</script>

<style lang="scss">
@keyframes jump {
  from {
    bottom: 0;
  }
  to {
    bottom: 40px;
  }
}
@mixin mixin-loop($iterations, $size, $opacity) {
  @for $i from 1 through $iterations {
    h1:nth-child(#{$i}) {
      font-size: $size+$i*3;
      opacity: $opacity*$i;
    }
    .h1-clicked:nth-child(#{$i}) {
      animation: .5s ease-in-out #{$i/100}s 2 alternate jump;
    }
  }
}

.scroll .heading-wrap, .hover .heading-wrap, .click .heading-wrap {
  @include mixin-loop(25, 30px, 0.04);
  h1 {
    text-align: center;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 5px;
    position: absolute;
    bottom: 0;
    transform: translate(-50%);
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
    }
  }
}

.start .heading-wrap {
  h1 {
    position: absolute;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font-size: 80px;
    transform: translate(-50%);
    padding-top: 1em;
  }

}
.scroll .heading-wrap {
  h1 {
    -webkit-text-fill-color: #FF0098;
    -webkit-text-stroke-color: #f40000;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #FF0098;
    }
  }
}
.hover .heading-wrap {
  h1 {
    -webkit-text-fill-color: #FF8B00;
    -webkit-text-stroke-color: #EE3F00;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #FF8B00;
    }
  }
}
.click .heading-wrap {
  h1 {
    -webkit-text-fill-color: #1808EF;
    -webkit-text-stroke-color: #001F44;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #1808EF;
    }
  }
}
@media screen and (max-width: 1000px) {
  .start .heading-wrap {
    h1 {
      padding-top: 0.5em;
      font-size: 70px;
    }
  }
}
@media screen and (max-width: 800px) {
  .scroll .heading-wrap, .hover .heading-wrap, .click .heading-wrap {
    @include mixin-loop(25, 15px, 0.04);
  }
  .start .heading-wrap {
    h1 {
      font-size: 45px;
    }
  }
}

@media screen and (max-width: 400px) {
  .scroll .heading-wrap, .hover .heading-wrap, .click .heading-wrap  {
    @include mixin-loop(25, 1px, 0.04);
    h1 {
      margin: 0;
    }
  }
  .start .heading-wrap {
    h1 {
      font-size: 40px;
      -webkit-text-stroke-width: 1px;
    }
  }
}


</style>
