<template>
  <div v-on:click="clickAnimate" class="roll">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1817.84 838.3">
      <defs>
        <linearGradient id="roll-gradient" :x1="gradients.one[0].x1" :y1="gradients.one[0].y1" :x2="gradients.one[0].x2" :y2="gradients.one[0].y2" gradientTransform="matrix(1, 0, 0, -1, 0, 838)" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" :stop-color="gradientColors[activeState].end"/>
          <stop offset="1" :stop-color="gradientColors[activeState].start"/>
        </linearGradient>
        <linearGradient id="roll-gradient-2" :x1="gradients.two[0].x1" :y1="gradients.two[0].y1" :x2="gradients.two[0].x2" :y2="gradients.two[0].y2" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="gradientColors[activeState].start"/>
          <stop offset="1" :stop-color="gradientColors[activeState].end"/>
        </linearGradient>
      </defs>
      <title>rollstart7</title>
      <path v-on:mouseover="hoverAnimate" v-on:mouseleave="hoverOut" class="cls-1 roll-path-one" :d="paths.one[0]"/>
      <path v-on:mouseover="hoverAnimate" v-on:mouseleave="hoverOut" class="cls-2 roll-path-two" :d="paths.two[0]"/>
      <path v-on:mouseover="hoverAnimate" v-on:mouseleave="hoverOut" class="cls-3 roll-path-three" :d="paths.three[0]"/>
    </svg>
    <uxText></uxText>
  </div>
</template>

<script>
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );
import uxText from '../partials/uxText.vue';

export default {
  name: 'roll',
  components: {
    uxText
  },
  data () {
    return {
      activeState: 'start',
      animating: false,
      gradientColors: {
        start: {
          start: '#000000',
          end: '#808080'
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
      // remove ?
      gradients: {
        one: [
          {x1: '1123.04', y1: '680.72', x2: '1047.24', y2: '102.13'},
          {x1: '1116.67', y1: '-1330.64', x2: '1046.34', y2: '-1867.41'}
        ],
        two: [
          {x1: '113.77', y1: '716.48', x2: '1121.79', y2: '531.52'},
          {x1: '113.78', y1: '678.49', x2: '268.37', y2: '493.53'}
        ]
      },
      paths: {
        one: [
          'M69.66,284.23,118.32,68.12s17.74-43.18,84.79-53.26,141-4.66,208.62,31.54c59.23,31.69,81.72,65.32,78.07,94.76S379.64,676.39,379.64,676.39s-20.45,53.7-72.47,68.37C249,761.16,140.91,735.45,98.89,714,62.16,695.3-13.89,653.39,6.82,563.36,34,445.33,69.66,284.23,69.66,284.23Z',
          'M86.15,343.92l25.23-220.08S124.34,79,190,61.75s139.68-19.8,210.78,8.93C463,95.84,489,126.84,488.57,156.55s-52.22,544-52.22,544-14.62,55.59-64.74,75.79c-56,22.54-166.24,8.59-210.3-8.28C122.81,753.45,42.65,720,53.58,628.25,67.95,507.92,86.15,343.92,86.15,343.92Z'
        ],
        two: [
          'M765.24,196.1c163.6-22.3,403-93,624.9-62.59,218.4,29.9,316.4,49.59,427.7,81.2V838.3s-311-89.22-442.93-106.45c-185.12-22.52-359.33,48.76-584.77,67-209,27-528.1-54-528.1-54,10.2-1.2,101.8,4.7,120.7-79.5,13.4-59.9,26.7-125,46.1-220.7,23.7-117,56.1-286.4,56.1-286.4S593.94,219.5,765.24,196.1Z',
          'M765.44,117.8c208.33-2.87,403.42,75.36,625.32,105.76,218.4,29.9,277.9-20.81,427-69.94l56.13,629.29s-289.39,69.82-442.24,44.64c-185.1-22.5-357.17-104.26-585.22-101.36-222.71,10.42-530.6,57.27-530.6,57.27,10.2-1.2,101.8-5.51,120.7-89.71,12.44-77.77,15-136.58,22.42-213C468.68,370.57,484.9,158.2,484.9,158.2S565.43,117.74,765.44,117.8Z'
        ],
        three: [
          'M377,668c-9.47,51.76-94,93.15-208.47,60.41C77.48,702.37,0,650.92,13.58,577,25.52,512.08,94.17,475.79,218,511.17,277.25,528.11,394.79,570.58,377,668Z',
          'M432.86,692.52C429,745,349.41,795.27,232,775,138.78,758.87,56.21,716,61.8,641c4.87-65.8,69.27-109.26,196.16-87.35C318.63,564.14,440.11,593.78,432.86,692.52Z'
        ]
      }
    }
  },
  methods: {
    runAnimation(index, duration, callback) {
      this.pathOne.animate({ d: this.paths.one[index] }, duration, mina.easeinout);
      this.pathTwo.animate({ d: this.paths.two[index] }, duration, mina.easeinout);
      this.pathThree.animate({ d: this.paths.three[index] }, duration, mina.easeinout, callback);
    },
    scrollAnimate() {
      const rect = this.$el.getBoundingClientRect();
      const windowheight = (window.innerHeight || document.documentElement.clientHeight);
      // if more than half the element is in viewport
      if (rect.top < windowheight * 0.5) {
        this.$el.classList.add('active-scroll-roll');
        if (this.animating) {
          return;
        }
        this.animating = true;
        Event.$emit('rollActive');
        this.runAnimation(1, 1000, () => {
          this.runAnimation(0, 1000, () => {
            Event.$emit('rollDone');
            this.animating = false;
          });
        });
      } else {
        this.$el.classList.remove('active-scroll-roll');
      }
    },
    hoverAnimate() {
      if (this.activeState === 'hover') {
        if (this.animating) {
          return;
        }
        this.animating = true;
        Event.$emit('rollHoverActive');
        this.runAnimation(1, 1000, () => {
          this.animating = false;
        });
      }
    },
    hoverOut() {
      if (this.activeState === 'hover') {
        Event.$emit('rollHoverDone');
        this.runAnimation(0, 1000);
      }
    },
    clickAnimate() {
      if (this.activeState === 'click') {
        Event.$emit('rollActive');
        this.runAnimation(1, 1000, () => {
          this.runAnimation(0, 1000, () => {
            Event.$emit('rollDone');
          });
        });
      }
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      const rect = this.$el.getBoundingClientRect();
      const windowheight = (window.innerHeight || document.documentElement.clientHeight);
      if (rect.top <  windowheight * 0.2) {
        this.$el.classList.add('active-scroll-roll');
      }
    });
    Event.$on('scrolling', () => {
      this.scrollAnimate();
    });
  },
  mounted() {
    const svg = this.$el.querySelector('svg');
    const s = Snap(svg);
    this.gradientOne = Snap.select('#roll-gradient');
    this.gradientTwo = Snap.select('#roll-gradient-2');
    this.pathOne = Snap.select('.roll-path-one');
    this.pathTwo = Snap.select('.roll-path-two');;
    this.pathThree = Snap.select('.roll-path-three');;
  }
}
</script>

<style lang="scss">
.roll {
  position: absolute;
  height: 100%;
  width: 95%;
  right: -2px;
  transition: all 1s linear;
  svg {
    position: absolute;
  }
  .cls-1 {
    fill: #fff;
  }
  .cls-2 {
    stroke: #fff;
    stroke-width: 6.53px;
    fill: url(#roll-gradient);
  }
  .cls-3 {
    fill: url(#roll-gradient-2);
  }
}
.scroll .roll {
  transform: translateX(100%);
}
.scroll .active-scroll-roll {
  transform: translateX(0);
}
@media screen and (max-width: 1150px) {
  .roll {
    width: 140%;
  }
}
@media screen and (max-width: 850px) {
  .roll {
    width: 180%;
  }
}
@media screen and (max-width: 690px) {
  .roll {
    width: 220%;
  }
}
@media screen and (max-width: 550px) {
  .roll {
    width: 280%;
  }
}
@media screen and (max-width: 450px) {
  .roll {
    width: 370%;
  }
}
@media screen and (max-width: 380px) {
  .roll {
    width: 450%;
  }
}
</style>
