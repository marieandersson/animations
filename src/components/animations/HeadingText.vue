<template>
  <div class="heading-wrap">
    <h1 v-for="n in 25">{{ headings[activeState ] }}<span v-if="activeState === 'start'"><br>animations</span></h1>
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
      }
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
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

.heading-wrap {
  @include mixin-loop(25, 30px, 0.04);
  h1 {
    text-align: center;
    -webkit-text-stroke-color: #fff;
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
    margin: 150px 0 0 150px;
    -webkit-text-fill-color: #000;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #000;
    }
  }

}
.scroll .heading-wrap {
  h1 {
    -webkit-text-fill-color: #FF0098;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #FF0098;
    }
  }
}
.hover .heading-wrap {
  h1 {
    -webkit-text-fill-color: #FF8B00;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #FF8B00;
    }
  }
}
.click .heading-wrap {
  h1 {
    -webkit-text-fill-color: #1808EF;
    &:nth-child(25) {
      -webkit-text-fill-color: #fff;
      -webkit-text-stroke-color: #1808EF;
    }
  }
}

@media screen and (max-width: 800px) {
  .heading-wrap {
    @include mixin-loop(25, 15px, 0.04);
  }
}

@media screen and (max-width: 400px) {
  .heading-wrap {
    @include mixin-loop(25, 1px, 0.04);
    h1 {
      margin: 0;
    }
  }
}


</style>
