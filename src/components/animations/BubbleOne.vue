<template>
  <div class="bubble-one">

    <svg v-on:click="clickAnimate" v-on:mouseover="hoverAnimateIn" v-on:mouseleave="hoverAnimateOut" class="bubble-one-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299 278">
      <defs>
        <linearGradient id="bubble-one-gradient" x1="121.28" y1="72.08" x2="230.33" y2="228.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="gradientColors[activeState].start" />
          <stop offset="1" :stop-color="gradientColors[activeState].end"/>
        </linearGradient>
      </defs>
      <path class="cls-1 grey-two" :d="greyAnimation.paths[0]" />
      <path class="cls-2 pink-two" :d="pinkAnimation.paths[0]" />
    </svg>

  </div>
</template>

<script>
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

export default {
  name: 'bubbleOne',
  data () {
    return {
      activeState: 'start',
      // SVG paths
      greyAnimation: {
        paths: [
          'M257.18,131.28c0,50.09-38.6,114.79-99.24,114.79S41.82,197.43,41.82,147.35,86.75,28,147.39,28,257.18,81.19,257.18,131.28Z',
          'M258.09,132.07c-1.6,59-54.94,111-96.34,111-64.34,0-98.2-70.22-98.2-104.43,0-96,37.71-144,99.55-134C222.37,14.25,260,60.67,258.09,132.07Z'
        ]
      },
      pinkAnimation: {
        paths: [
          'M244.76,145.93c0,34.63-24.72,79.38-63.55,79.38S106.84,191.67,106.84,157s28.78-82.55,67.61-82.55S244.76,111.29,244.76,145.93Z',
          'M174.89,165.28c0,23.65,58,111.07-11.37,111.07-73.79,0-44.8-82.05-44.8-105.7S61.76,70,153.55,64.93C261,59,174.89,141.62,174.89,165.28Z'
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
      lastScrollPosition: 0,
      animateIn: false
    }
  },
  methods: {
    runAnimation (index, duration) {
      this.grey.animate({ d: this.greyAnimation.paths[index] }, duration, mina.linear);
      this.pink.animate({ d: this.pinkAnimation.paths[index] }, duration, mina.easeinout);
    },
    scrollAnimate(index) {
      this.currentScrollPosition = window.scrollY;
      // check if scroll goes up or down
      if (this.currentScrollPosition > this.lastScrollPosition) {
        this.runAnimation(1, 1000);
        this.animateIn = true;
      } else {
        this.runAnimation(0, 1000);
        this.animateIn = false;
      }
      this.lastScrollPosition = this.currentScrollPosition;
    },
    hoverAnimateIn () {
      if (this.activeState === 'hover') {
        this.runAnimation(1, 2000);
      }
    },
    hoverAnimateOut () {
      if (this.activeState === 'hover') {
        this.runAnimation(0, 2000);
      }
    },
    clickAnimate() {
      if (this.activeState === 'click') {
        this.animateIn = !this.animateIn;
        if (this.animateIn) {
          this.runAnimation(1, 2000);
        } else {
          this.runAnimation(0, 2000);
        }
      }
    }
  },
  mounted () {
    const bubbleOne = this.$el.querySelector('.bubble-one-svg');
    const s = Snap(bubbleOne);
    this.grey = Snap.select('.grey-two');
    this.pink = Snap.select('.pink-two');
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      if (clickedNavItem === 'hover') {
        this.runAnimation(0, 2000);
        this.animateIn = false;
      }
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
.bubble-one {
  width: 240px;
  position: absolute;
  left: 70px;
  bottom: 0;
  svg {
    .grey-two {
      fill:#d8d2d2;
    }
    .pink-two {
      fill:url(#bubble-one-gradient);
    }
  }
}
.click .bubble-one {
  cursor: pointer;
}
@media screen and (max-width: 1150px) {
  .bubble-one {
    left: 100px;
  }
}
@media screen and (max-width: 1000px) {
  .bubble-one {
    width: 200px;
    left: auto;
    right: 20px;
  }
}
@media screen and (max-width: 580px) {
  .bubble-one {
    width: 150px;
  }
}

</style>
