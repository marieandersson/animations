<template>
  <div :class="['background', activeState]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 2152.21">
      <defs>
        <linearGradient id="linear-gradient" :x1="shadowAnimation.gradients[0].x1" :y1="shadowAnimation.gradients[0].y1" :x2="shadowAnimation.gradients[0].x2" :y2="shadowAnimation.gradients[0].y2" gradientUnits="userSpaceOnUse">
          <stop offset="0" :stop-color="gradientColors[activeState].start"/>
          <stop offset="1" :stop-color="gradientColors[activeState].end"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="258.69" y1="1749.48" x2="224.35" y2="1852.48" xlink:href="#linear-gradient"/>
        <filter id="blurMe">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
      </defs>
      <title>1_Bakgrund copy 3@2x100</title>
      <g id="Layer_3" data-name="Layer 3">
        <polygon class="cls-1 polygon-one" points="270.3 1742.7 355.64 1887.3 123.62 1872.72 114 1754.86 270.3 1742.7"/>
        <polygon class="cls-1 polygon-two" :points="shadowAnimation.points[0]"/>
        <path v-on:click="toggleAnimation" class="cls-2 path-one" :d="pathAnimation.shapes[0]"/>
        <line class="cls-3 line-one" :x1="lineAnimation.points[0].x1" :y1="lineAnimation.points[0].y1" :x2="lineAnimation.points[0].x2" :y2="lineAnimation.points[0].y2"/>
        <line class="cls-3 line-two" x1="152.51" y1="1824.04" x2="48.93" y2="1347.87" />
      </g>
    </svg>
  </div>
</template>

<script>
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

export default {
  name: 'background',
  data () {
    return {
      activeState: 'start',
      animating: false,
      pathAnimation: {
        durations: [3000, 3000],
        shapes: [
          'M1366,995.74h-.76v313h-1l-330.37,192.79s-401.66,209.57-758.73,247.36c-161.46,17.08-122.66,83.67-118,89.77s20.94,33,103.2,21.82c72-9.81,98.9,24.86,103.7,37.31s25.7,57.13-129.77,137.26C61.81,2123.92,0,2108.53,0,2108.53V984.18H-.19L.18,864.86C440.63,917,742.72,482,1091.75,397.74c98.29-23.63,119.6-66.53,107.12-98.46s-55.36-33.06-107.12-14.11c-68.22,25-101.29-11.67-107.68-23.39s-33-53.27,110.65-153.09C1254.08-2.07,1365.24,0,1365.24,0Z',
          'M1366,995.74h-.76v313h-1l-330.37,192.79s-401.66,209.57-758.73,247.36c-161.46,17.08-122.66,83.67-118,89.77s20.94,33,103.2,21.82c72-9.81,98.9,24.86,103.7,37.31s25.7,57.13-129.77,137.26C61.81,2123.92,0,2108.53,0,2108.53V984.18H-.19L.18,864.86C440.63,917,599.32,468.06,905.51,515.79c86.52,14.62,113.23-5.55,122-43,7-29.8-17.55-66.38-110.22-83.78-33.15-6.22-49.64-28.63-48.7-45.62,2.21-40.25,82.47-134.86,226.1-234.68C1254.08-2.07,1365.24,0,1365.24,0Z'
        ]
      },
      shadowAnimation: {
        durations: [3000, 3000],
        points: [
          [1095.54, 403.43, 992.03, 271.22, 1161.26, 226.65, 1248.9, 370.95, 1095.54, 403.43],
          [907.01, 522.52, 868.63, 350.07, 1084.31, 430.4, 1025.13, 576.86, 907.01, 522.52]
        ],
        gradients: [
          {x1: '1118.25', y1: '375.35', x2: '1121.79', y2: '288.56'},
          {x1: '925.43', y1: '511.47', x2: '966.5', y2: '419.56'}
        ]
      },
      lineAnimation: {
        durations: [3070, 2940],
        points: [
          { x1: '1198.71', y1: '302.52', x2: '1366', y2: '768' },
          { x1: '1027.77', y1: '465.2', x2: '1043.57', y2: '791.91' }
        ]
      },
      gradientColors: {
        start: {
          start: '#808080',
          end: '#e5e5e5'
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
      }
    }
  },
  methods: {
    toggleAnimation() {
      this.animating = !this.animating;
      if (this.animating) {
        this.animateBackground();
      }
    },
    animateBackground () {
      if (this.animating) {
        this.runAnimation(1, () => {
          this.runAnimation(0, () => {
            requestAnimationFrame(this.animateBackground);
          })
        })
      }
    },
    runAnimation (index, callback) {
      this.line.animate(this.lineAnimation.points[index], this.lineAnimation.durations[index], mina.easeinout);
      this.shadow.animate({ points: this.shadowAnimation.points[index] }, this.shadowAnimation.durations[index], mina.easeinout);
      this.gradient.animate(this.shadowAnimation.gradients[index], this.shadowAnimation.durations[index], mina.easeinout);
      this.path.animate({ d: this.pathAnimation.shapes[index] }, this.pathAnimation.durations[index], mina.easeinout, callback);
    }
  },
  mounted () {
    const svg = document.querySelector('svg');
    const s = Snap(svg);
    this.shadow = Snap.select('.polygon-two');
    this.path = Snap.select('.path-one');
    this.line = Snap.select('.line-one');
    this.gradient = Snap.select('#linear-gradient');
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
  }
}
</script>

<style lang="scss">
.background {
  height: 100vh;
  width: calc(100% - 60px);
  position: absolute;
  top: 0;
  left: 60px;
  z-index: 10;
  .polygon-one {
    fill: url(#linear-gradient-2);
  }
  .polygon-two {
    fill: url(#linear-gradient);
    transition: fill 1s linear;
  }
  .path-one {
    fill: #fff;
  }
  .line-one, .line-two {
    fill:none;
    stroke-linecap:round;
    stroke-miterlimit:10;
    stroke-width:3px;
  }
}
.start .line-one, .start .line-two {
  stroke: #d2d2d2;
}
.scroll .line-one, .scroll .line-two {
  stroke: #FF0098;
}
.hover .line-one, .hover .line-two {
  stroke: #FF8B00;
}
.click .line-one, .click .line-two {
  stroke: #1808EF;
}
@media screen and (max-width: 1100px) {
  .background {
    padding-top: 150px;
  }
}
@media screen and (max-width:600px) {
  .background {
    width: calc(100% - 40px);
    left: 40px;
  }
}
</style>
