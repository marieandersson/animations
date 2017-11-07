<template>
  <div class="bubble-two">

    <svg v-on:click="clickAnimate" v-on:mouseover="hoverAnimateIn" v-on:mouseleave="hoverAnimateOut" class="bubble-two-svg" viewBox="0 0 299 278" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="bubble-two-gradient" x1="110.27" y1="53.02" x2="213.5" y2="200.69" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="gradientColors[activeState].start" />
          <stop offset="1" :stop-color="gradientColors[activeState].end"/>
        </linearGradient>
      </defs>
      <path class="cls-1 grey-one" :d="greyAnimation.paths[0]" />
      <path class="cls-2 pink-one" :d="pinkAnimation.paths[0]" />
    </svg>

  </div>
</template>

<script>
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

export default {
  name: 'bubbleTwo',
  data () {
    return {
      activeState: 'start',
      // SVG paths
      greyAnimation: {
        paths: [
          'M251.26,94.78c15.64,47.58,22.94,123-42.78,143-58,17.72-143,0-164.56-53-18.85-46.4,0-109.4,71.78-140.33C171.39,20.53,231.67,35.18,251.26,94.78Z',
          'M227.34,81.36C243,128.94,268,207.19,202.28,227.28,144.29,245,83,241.7,61.44,188.73,42.58,142.33,19.5,94.38,91.27,63.46,147,39.46,207.75,21.76,227.34,81.36Z'
        ]
      },
      pinkAnimation: {
        paths: [
          'M227.81,121.85c0,34.63-7.73,65.71-59.28,73.44-45.46,6.82-78.61-26.36-78.61-61,0-60.14,48.46-75.41,87.29-75.41S227.81,87.22,227.81,121.85Z',
          'M256.68,157.76c0,44-45.62,69.22-99.41,69.06-34.55-.1-101.12,1.61-108.33-70.16C41.76,85.09,114.6,58.17,159.71,79.77,220.13,108.69,256.68,134.12,256.68,157.76Z'
        ]
      },
      gradientColors: {
        start: {
          start: '#000000',
          end: '#e6e6e6'
        },
        scroll: {
          start: '#F40000',
          end: '#FF0098'
        },
        hover: {
          start: '#EE3F00',
          end: '#FF8B00'
        },
        click: {
          start: '#001F44',
          end: '#1808EF'
        }
      },
      animating: false,
      lastScrollTime: null,
      animateIn: false
    }
  },
  methods: {
    runAnimation (index) {
      this.grey.animate({ d: this.greyAnimation.paths[index] }, 2000, mina.linear);
      this.pink.animate({ d: this.pinkAnimation.paths[index] }, 2000, mina.easeinout);
    },
    scrollAnimate() {
      // this.lastScrollTime = Date.now();
      if (this.animating) {
        return;
      }
      // this.scrollPosition = window.scrollY;
      // console.log(this.scrollPosition);
      this.animating = true;
      // this.animateIn();
    },
    hoverAnimateIn () {
      if (this.activeState === 'hover') {
        this.runAnimation(1);
      }
    },
    hoverAnimateOut () {
      if (this.activeState === 'hover') {
        this.runAnimation(0);
      }
    },
    clickAnimate() {
      if (this.activeState === 'click') {
        this.animateIn = !this.animateIn;
        if (this.animateIn) {
          this.runAnimation(1);
        } else {
          this.runAnimation(0);
        }
      }
    }
  },
  mounted () {
    const bubbleTwo = this.$el.querySelector('.bubble-two-svg');
    const s = Snap(bubbleTwo);
    this.grey = Snap.select('.grey-one');
    this.pink = Snap.select('.pink-one');
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
    Event.$on('scrolling', () => {
      if (window.isElementInViewport(this.$el)) {
        this.scrollAnimate();
      }
    });
  }
}
</script>

<style lang="scss">
.bubble-two {
  width: 240px;
  position: absolute;
  right: 70px;
  top: 0;
  svg {
    .grey-one {
      fill:#d8d2d2;
    }
    .pink-one {
      fill:url(#bubble-two-gradient);
    }
  }
}
@media screen and (max-width: 1000px) {
  .bubble-two {
    width: 200px;
    right: auto;
    left: 20px;
  }
}
@media screen and (max-width: 580px) {
  .bubble-two {
    width: 150px;
  }
}
@media screen and (max-width: 480px) {
  .bubble-two {
    display: none;
  }
}
</style>
