<template>
  <div class="background">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 2152.21">
      <defs>
        <linearGradient id="linear-gradient" :x1="shadowAnimation.gradients[0].x1" :y1="shadowAnimation.gradients[0].y1" :x2="shadowAnimation.gradients[0].x2" :y2="shadowAnimation.gradients[0].y2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#001f44"/>
          <stop offset="1" stop-color="#1808ef"/>
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
      pathAnimation: {
        durations: [3000, 3000],
        shapes: [
          'M1366,995.74h-.76v313h-1l-330.37,192.78s-401.66,209.58-758.73,247.37c-161.46,17.08-122.66,83.67-118,89.77s20.94,33,103.21,21.82c72-9.82,98.89,24.86,103.69,37.3s25.71,57.14-129.77,137.27C61.81,2123.92,0,2108.53,0,2108.53V984.17H-.19L.18,864.86C440.63,917,742.72,482,1091.76,397.74c157.82-38.11,110.63-99,105.17-104.47s-25.09-30-105.17-8.1c-70.08,19.17-101.3-11.68-107.69-23.39s-33-53.27,110.65-153.09C1254.08-2.07,1365.24,0,1365.24,0Z',
          'M1366,995.74h-.76v313h-1l-330.37,192.78s-401.66,209.58-758.73,247.37c-161.46,17.08-122.66,83.67-118,89.77s21,33,103.21,21.82c72-9.82,98.89,24.86,103.7,37.31s25.7,57.13-129.78,137.26C61.8,2123.92,0,2108.53,0,2108.53V984.17H-.19L.18,864.86c338.07,40,755.72-329.49,837-349.89,77.08-19.33,168.19,57.91,190.34-42.2,8-36.33-32.14-63.11-57.91-69.34C893,384.92,859,372,868.38,323.33c6.72-34.74,82.71-114.82,226.34-214.64C1254.08-2.07,1365.24,0,1365.24,0Z'
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
          { x1: '1201.71', y1: '302.52', x2: '1366', y2: '768' },
          { x1: '1027.77', y1: '465.2', x2: '1043.57', y2: '791.91' }
        ]
      },
      animating: false
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
  }
}
</script>

<style lang="scss">
.background {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  z-index: 18;
  .polygon-one {
    fill: url(#linear-gradient-2);
  }
  .polygon-two {
    fill: url(#linear-gradient);
  }
  .cls-2 {
    fill: #fff;
  }
  .cls-3 {
    fill:none;
    stroke:#001f44;
    stroke-linecap:round;
    stroke-miterlimit:10;
    stroke-width:3px;
  }
  .line-one {
    // filter: url(#blurMe);
  }
}
</style>
