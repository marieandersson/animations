<template>
  <div v-on:click="clickAnimate" class="roll">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1817.84 838.3">
      <defs>
        <linearGradient id="roll-gradient" :x1="gradients.one[0].x1" :y1="gradients.one[0].y1" :x2="gradients.one[0].x2" :y2="gradients.one[0].y2" gradientTransform="matrix(1, 0, 0, -1, 0, 838)" gradientUnits="userSpaceOnUse">
          <stop offset="0.2" :stop-color="gradientColors[activeState].end"/>
          <stop offset="1" :stop-color="gradientColors[activeState].start"/>
        </linearGradient>
        <linearGradient id="roll-gradient-2" :x1="gradients.two[0].x1" :y1="gradients.two[0].y1" :x2="gradients.two[0].x2" :y2="gradients.two[0].y2" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="gradientColors[activeState].end"/>
          <stop offset="1" :stop-color="gradientColors[activeState].start"/>
        </linearGradient>
      </defs>
      <title>rollstart7</title>
      <path class="cls-1 roll-path-one" :d="paths.one[0]"/>
      <path class="cls-2 roll-path-two" :d="paths.two[0]"/>
      <path class="cls-3 roll-path-three" :d="paths.three[0]"/>
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
          'M67.19,289,110.06,71.66S126.59,28,193.4,16.1,334.22,7.62,402.77,42c60,30.1,83.43,63.08,80.62,92.67s-95.87,538.07-95.87,538.07S368.47,727,316.88,743c-57.64,18-166.39-4.83-209-25.19C70.74,700.15-6.46,660.31,11.81,569.78,35.83,451,67.19,289,67.19,289Z'
        ],
        two: [
          'M765.24,196.1c163.6-22.3,403-93,624.9-62.59,218.4,29.9,316.4,49.59,427.7,81.2V838.3s-311-89.22-442.93-106.45c-185.12-22.52-359.33,48.76-584.77,67-209,27-528.1-54-528.1-54,10.2-1.2,101.8,4.7,120.7-79.5,13.4-59.9,26.7-125,46.1-220.7,23.7-117,56.1-286.4,56.1-286.4S593.94,219.5,765.24,196.1Z',
          'M774.27,116.44c166,0,413.3,91.21,626.6,120.54,183.81,18,261.38-.34,416.93-5.27V815.9s-291.11,29.06-442.9,1.8c-230.68-36.68-383-118.38-584.8-122.95C543,686.13,262,744.8,262,744.8c10.2-1.2,109.45,4.7,128.35-79.5,12.35-60.86,22.87-122.59,41.28-220.7,16.87-101.95,46.6-300.39,46.6-300.39S580.82,116.44,774.27,116.44Z'
        ],
        three: [
          'M377,668c-9.47,51.76-94,93.15-208.47,60.41C77.48,702.37,0,650.92,13.58,577,25.52,512.08,94.17,475.79,218,511.17,277.25,528.11,394.79,570.58,377,668Z',
          'M384.69,664.4c-8.1,52-91.46,95.69-206.8,66C86.22,706.83,7.37,657.44,19,583.2,29.13,518,96.83,479.87,221.53,511.93,281.17,527.23,399.87,566.55,384.69,664.4Z'
        ]
      }
    }
  },
  methods: {
    runAnimation() {

    },
    scrollAnimate() {
      const rect = this.$el.getBoundingClientRect();
      const windowheight = (window.innerHeight || document.documentElement.clientHeight);
      // if more than half the element is in viewport
      if (rect.top < windowheight * 0.5) {
        this.$el.classList.add('active-scroll-roll');
        Event.$emit('rollInView');
      } else {
        this.$el.classList.remove('active-scroll-roll');
        Event.$emit('rollOutOfView');
      }
    },
    clickAnimate() {
      Event.$emit('rollClicked');
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
    this.pathOne = '';
    this.pathTwo = '';
    this.pathThree = '';
  }
}
</script>

<style lang="scss">
.roll {
  position: absolute;
  height: 100%;
  width: 95%;
  right: 0;
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
    width: 350%;
  }
}
@media screen and (max-width: 380px) {
  .roll {
    width: 450%;
  }
}
</style>
