<template>
  <div class="heading-wrap">
    <h1 v-for="n in 30">{{ headings[activeState ] }}<span v-if="activeState === 'start'"><br>animations</span></h1>
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

.start .heading-wrap, .scroll .heading-wrap, .hover .heading-wrap, .click .heading-wrap {
  @mixin mixin-loop($iterations) {
    @for $i from 1 through $iterations {
      h1:nth-child(#{$i}) {
        font-size: 30px+$i*3;
        opacity: 0.033*$i;
      }
    }
  }
  @include mixin-loop(30);
  h1 {
    text-align: center;
    margin: 250px 0 0 250px;
    -webkit-text-stroke-color: #fff;
    -webkit-text-stroke-width: 2px;
    letter-spacing: 5px;
    position: absolute;
    transform: translate(-50%);
    &:nth-child(30) {
      -webkit-text-fill-color: #fff;
    }
  }
}

.start .heading-wrap {
  h1 {
    margin: 150px 0 0 150px;
    -webkit-text-fill-color: #000;
    &:nth-child(30) {
      -webkit-text-stroke-color: #000;
    }
  }

}
.scroll .heading-wrap {
  h1 {
    -webkit-text-fill-color: #FF0098;
    &:nth-child(30) {
      -webkit-text-stroke-color: #FF0098;
    }
  }
}
.hover .heading-wrap {
  h1 {
    -webkit-text-fill-color: #FF8B00;
    &:nth-child(30) {
      -webkit-text-stroke-color: #FF8B00;
    }
  }
}
.click .heading-wrap {
  h1 {
    -webkit-text-fill-color: #1808EF;
    &:nth-child(30) {
      -webkit-text-stroke-color: #1808EF;
    }
  }
}

// @media screen and (max-width: 520px) {
//   .heading-wrap {
//     margin: 3em 1em;
//     justify-content: center;
//   }
// }




</style>
