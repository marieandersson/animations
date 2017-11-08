<template>
  <div class="heading-wrap">
    <h1 v-if="activeState === 'start'">Inspiring<br>Animations</h1>
    <h1 v-else v-for="n in 25">{{ headings[activeState ] }}<span v-if="activeState === 'start'"><br>animations</span></h1>
  </div>
</template>

<script>

export default {
  name: 'headingText',
  data () {
    return {
      activeState: 'start',
      headings: {
        start: 'Inspiring',
        scroll: 'Scroll',
        hover: 'Hover',
        click: 'Click'
      },
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
        this.$el.querySelectorAll('h1').forEach(header => {
          header.style.transform = `translate(-50%, ${translateY}%)`;
        });
      }
    },
    hoverAnimate() {
      console.log('hovering');

    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
    Event.$on('scrolling', () => {
      this.scrollAnimate();
    });
    Event.$on('headerHover', () => {
      if (this.activeState === 'hover') {
        this.hoverAnimate();
      }
    })
  }
}

</script>

<style lang="scss">
@mixin mixin-loop($iterations, $size, $opacity) {
  @for $i from 1 through $iterations {
    h1:nth-child(#{$i}) {
      font-size: $size+$i*3;
      opacity: $opacity*$i;
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
