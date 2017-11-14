<template>
  <div class="heading-wrap">
    <h1 v-if="activeState === 'start'"><span>Hover, click, scroll</span><br>Animations for the web</h1>
    <!-- loop out headings for shadow effect-->
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
      const scrollPercent = (window.scrollY / rect.height) * 100;
      const translateY = scrollPercent;
      // if element is in viewport
      if (translateY <= 150) {
        for (let i = 0; i < this.headings.length; i++) {
          this.headings[i].style.transform = `translate(-50%, ${translateY}%)`;
        }
      }
    },
    hoverAnimate() {
      // calculate on the cursors position relative to the heading center
      const cursor = {
        x: event.clientX,
        y: event.clientY
      }
      const vector = {
        x: cursor.x - this.headingCenter.x,
        y: cursor.y - this.headingCenter.y
      }
      const distance = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
      // set animation translate values
      const trans = {
        // default style is translate X -50%
        x: -50 + ((vector.x / distance) * 20),
        y: (vector.y /distance) * 20
      }
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
      // set header back in original position
      for (let i = 0; i < this.headings.length; i++) {
        this.headings[i].style.transform = 'translate(-50%, 0)';
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
    this.headings = this.$el.children;
    this.headingFront = this.headings[this.headings.length - 1];
    this.rect = this.headingFront.getBoundingClientRect();
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.headingCenter = {
      x: this.rect.left + (this.rect.width / 2),
      y: this.rect.top +  this.scrollTop + (this.rect.height / 2)
    }
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
    -webkit-text-stroke-width: 2px;
    bottom: 0;
    letter-spacing: 5px;
    position: absolute;
    text-align: center;
    transform: translate(-50%);
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
    }
  }
}

.start .heading-wrap {
  h1 {
    font-family: 'Open sans';
    font-size: 40px;
    font-weight: 300;
    line-height: 1.3;
    padding: 5em 0 0 2em;
    position: absolute;
    text-transform: none;
    transform: translate(-50%);
    span {
      font-family: 'Poppins';
      font-size: 64px;
      font-weight: 700;
      text-transform: uppercase;
    }
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
    cursor: pointer;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #1808EF;
    }
  }
}
@media screen and (max-width: 1250px) {
  .start .heading-wrap {
    h1 {
      font-size: 30px;
      padding: 3em 0 0 2em;
      span {
        font-size: 50px;
      }
    }
  }
}
@media screen and (max-width: 800px) {
  .scroll .heading-wrap, .hover .heading-wrap, .click .heading-wrap {
    @include mixin-loop(25, 15px, 0.04);
  }
  .start .heading-wrap {
    h1 {
      font-size: 20px;
      padding: 3em 0 0 0;
      span {
        font-size: 40px;
      }
    }
  }
}
@media screen and (max-width: 540px) {
  .start .heading-wrap {
    h1 {
      font-size: 25px;
      padding: 3em 1em 0;
      span {
        font-size: 40px;
      }

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
      -webkit-text-stroke-width: 1px;
      padding: 2em 0.5em;
    }
  }
}


</style>
