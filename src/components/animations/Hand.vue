<template>
  <div class="hand">
    <svg class="svg-hand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523 227">
      <title>1_Hand@2x100</title>
      <path v-on:mouseover="hoverAnimate" v-on:click="clickAnimate" class="hand-path" v-bind:d="activeState === 'scroll' ? handPaths[1] : handPaths[0]"/>
    </svg>
  </div>
</template>

<script>
// TODO: only require once and not in each svg comppnent?
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

export default {
  name: 'hand',
  data () {
    return {
      activeState: 'start',
      animating: false,
      handPaths: [
        'M149.25,69.38c-19.22-7.53-38.88-15.55-41.2-17.26-4.59-3.38-6.2-7.84-4.77-10.38,1.74-3.08,8-1.21,8-1.21s57,13.32,72.1,16.93,48.34,10.29,79.15,16.31c13.69,2.67,42.9,9.22,62,12.72,26.74,4.91,51.85,4.36,66.67,5.37,26.56,1.82,82.33,4.63,82.33,4.63L467,156s-137.5-6.5-144.5-5.5-16,3-34,11c-18.5,8.22-31,10-54,12-33,2.87-81,1.5-81-5s16-16,42-14a132.09,132.09,0,0,0,30-4c19.32-5.15,15-11,1-15a76.73,76.73,0,0,0-22-3l-57-3s-57.24,1.07-67,0c-9.51-1-14.72-3.9-15.13-8.88s18.15-6.3,18.15-6.3,48.56-3.45,64.57-4.4c15.78-.94,49.42-1.42,49.42-1.42-28.75-2-53.09-4.21-64-4-14,.27-61-.06-68-1C59.55,102.7,50.65,98.11,51,93c.47-6,17.43-5.51,17.43-5.51s44-1,66-2,62,2,62,2-39.07-2-41-2c-2.89,0-15.64-.22-20,0-14.67.74-26,.91-26,.91-14.89-1.2-24.89-2.61-28-2.91-5.08-.49-20-5-20-12,0-6,15-5,15-5,55,1,54,2,75,3,11.83.59,35,2.76,49,4',
        'M149.53,68.9c-19.22-7.53-39.13-15.56-41.45-17.27-4.59-3.38-6.2-7.84-4.77-10.38,1.74-3.08,8-1.21,8-1.21s59.37,13.47,74.46,17.09,48.49,10.76,79,16.47c14.07,2.64,39.24,9,58.34,12.5,26.74,4.91,52.34,4.26,67.16,5.27C416.76,93.19,472.53,96,472.53,96L466,155.5s-137.5-6.5-144.5-5.5-16,3-34,11c-18.5,8.22-31,10-54,12-33,2.87-81,1.5-81-5s16-16,42-14a132.09,132.09,0,0,0,30-4c19.32-5.15,15-11,1-15a76.73,76.73,0,0,0-22-3l-50,4S110,167.69,101.15,172c-8.6,4.19-12.18,4.7-15.18.7s12-15,12-15,33.35-35.62,48.56-40.69c15-5,50-9,50-9-28.75-2-53.09-4.21-64-4-14,.27-55,8-62,9-5.94.85-17,1-18-4-1.18-5.88,15-11,15-11s44-12,66-13,63,2,63,2-40.07-2-42-2c-2.89,0-15.65-.31-20,0-14,1-23.62,2.61-23.62,2.61C96.23,86,82.69,84.43,80.53,84c-5-1-19-5-19-12,0-6,14-5,14-5,55,1,55,1,76,2,11.83.59,35,2.76,49,4',
        'M149.45,74.41c-19.22-7.53-40.07-13.57-42.39-15.28-4.59-3.38-6.2-7.84-4.77-10.38,1.74-3.08,8-1.21,8-1.21S170.62,59,185.72,62.63s48.49,10.76,79,16.47c14.07,2.64,39.24,9,58.34,12.5,26.74,4.91,52.34,4.26,67.16,5.27,26.56,1.82,83.08,1.86,83.08,1.86L466,161s-137.5-6.5-144.5-5.5-16,3-34,11c-18.5,8.22-31,10-54,12-33,2.87-81,1.5-81-5s16-16,42-14a132.09,132.09,0,0,0,30-4c19.32-5.15,15-11,1-15a76.73,76.73,0,0,0-22-3l-49-3s-22,34-32,40c-8.2,4.92-12,7-15,3s10-18,10-18,14.79-38.93,30-44c15-5,49-2,49-2-28.75-2-53.09-4.21-64-4-14,.27-54,12-61,13-5.94.85-17,1-18-4-1.18-5.88,15-11,15-11s43-16,65-17,63,2,63,2-40.07-2-42-2c-2.89,0-15.65-.31-20,0a122.56,122.56,0,0,0-24,4,226.19,226.19,0,0,1-30-2c-5-1-19-5-19-12,0-6,14-5,14-5,55,1,55-2,76-1,11.83.59,35,2.76,49,4'
      ]
    }
  },
  methods: {
    runAnimation(index, callback) {
      // animation eith snap.svg
      this.handPath.animate({ d: this.handPaths[index] }, 1000, mina.linear, callback);
    },
    scrollAnimate() {
      if (this.activeState != 'scroll') {
        return;
      }
      if (this.animating) {
        return;
      }
      this.animating = true;
      this.$el.classList.add('active-scroll-hand');
      this.$el.addEventListener('transitionend', () => { // TODO: remove eventlistner when done
        // TODO: use requestAnimationFrame
        this.runAnimation(2, () => {
          this.runAnimation(1, () => {
            this.runAnimation(2, () => {
              this.runAnimation(1, () => {
                if (this.activeState != 'scroll') {
                  // set hand back to active page start path
                  this.runAnimation(0);
                }
              });
            });
          });
        });
      });
    },
    hoverAnimate() {
      if (this.activeState === 'hover') {
        event.target.classList.add('active-hover-hand');
        event.target.addEventListener('animationend', () => {
          event.target.classList.remove('active-hover-hand');
        })
      }
    },
    clickAnimate() {
      if (this.activeState === 'click') {
        this.runAnimation(1, () => {
          this.runAnimation(0);
        });
      }
    },
    isElInViewport () {
      const rect = this.$el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    },
  },
  mounted () {
    const hand = this.$el.querySelector('.svg-hand');
    const s = Snap(hand);
    this.handPath = Snap.select('.hand-path');
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      if (this.isElInViewport()) {
        this.$el.classList.add('active-scroll-hand');
      }
    });
    Event.$on('scrolling', () => {
      if (this.isElInViewport()) {
        this.scrollAnimate();
      } else {
        this.$el.classList.remove('active-scroll-hand');
        this.animating = false;
      }
    });
  }
}
</script>

<style lang="scss">
@keyframes movehand {
  0% {
		transform: rotate(0deg) translate(0) rotate(0deg);
	}
	50% {
		transform: rotate(180deg) translate(-20px) rotate(-180deg);
	}
  100% {
		transform: rotate(270deg) translate(0) rotate(-270deg);
	}
}
.active-hover-hand {
  animation: movehand 3s linear;
}
.hand {
  position: absolute;
  right: 0;
  transform: translate(105px, 0);
  transition: all 1s linear;
  width: calc(50% + 100px);
  .hand-path {
    fill: transparent;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width : 4px;
    stroke: rgba(255, 255, 255, 0.9);
  }
}
.scroll .hand {
  transform: translate(1000px, 0);
}
.scroll .active-scroll-hand {
  transform: translate(100px, 0);
}
.click .hand {
  cursor: pointer;
}
@media screen and (max-width: 1270px) {
  .scroll .hand {
    transform: translate(1000px, -110px);
  }
  .hand, .scroll .active-scroll-hand {
    transform: translate(100px, -110px);
    width: 700px;
  }
}
@media screen and (max-width: 1050px) {
  .scroll .hand {
    transform: translate(1000px, 110px);
  }
  .hand, .scroll .active-scroll-hand {
    transform: translate(100px, 110px);
    width: 800px;
  }
}
@media screen and (max-width: 750px) {
  .scroll .hand {
    transform: translate(1000px, 150px);
  }
  .hand, .scroll .active-scroll-hand {
    transform: translate(100px, 150px);
    width: calc(100% + 100px);
  }
}
</style>
