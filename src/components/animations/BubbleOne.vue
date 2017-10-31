<template>
  <div class="bubble-one">

    <svg v-on:mouseover="animate" class="bubble-one-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299 278">
      <defs>
        <linearGradient id="linear-gradient" x1="121.28" y1="72.08" x2="230.33" y2="228.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff1aa2"/>
          <stop offset="1" stop-color="#f40000"/>
        </linearGradient>
      </defs>
      <path class="cls-1 grey" :d="this.greyAnimation.paths[0]" />
      <path class="cls-2 pink" :d="this.pinkAnimation.paths[0]" />
    </svg>

  </div>
</template>

<script>
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

export default {
  name: 'bubbleOne',
  data () {
    return {
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
      animating: false
    }
  },
  methods: {
    animate () {
      if (this.animating) {
        return;
      }
      this.animating = true;
      let self = this;
      self.runAnimation(1, function () {
        self.runAnimation(0, function () {
          console.log('done');
          requestAnimationFrame(self.animate);
          self.animating = false;
        })
      });
    },
    runAnimation (index, callback) {
      this.grey.animate({ d: this.greyAnimation.paths[index] }, 1000, mina.linear);
      this.pink.animate({ d: this.pinkAnimation.paths[index] }, 1000, mina.easeinout, callback);
    }
  },
  mounted () {
    const bubble = this.$el.querySelector('.bubble-one-svg');
    const s = Snap(bubble);
    this.grey = Snap.select('.grey');
    this.pink = Snap.select('.pink');
  }
}
</script>

<style lang="scss">
.bubble-one {
  width: 25%;
  svg {
    .grey {
      fill:#d8d2d2;
    }
    .pink {
      fill:url(#linear-gradient);
    }
  }
}
</style>
