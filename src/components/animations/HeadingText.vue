<template>
  <div class="heading-wrap">
    <h1>{{ headings[activeState ] }}<span v-if="activeState === 'start'"><br>animations</span></h1>
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
@function setLongShadow($color, $length) {
  $value: 0 0 $color;

  @for $i from 1 through $length {
    $value: #{$value}, #{-$i}px #{$i/2}px #{$color};
  }

  @return $value;
}

@mixin longShadow($color, $length:200) {
  text-shadow: setLongShadow($color, $length);
}

.heading-wrap {
  h1 {
    margin: 250px 0 0 250px;
    -webkit-text-fill-color: #fff;
    -webkit-text-stroke-width: 2px;
  }
}

.start .heading-wrap {
  h1 {
    margin: 150px 0 0 150px;
    -webkit-text-stroke-color: #000;
  //  @include longShadow(darken(#ccc, 10%), 100);
  }

}
.scroll .heading-wrap {
  h1 {
    -webkit-text-stroke-color: #FF0098;
  }
}
.hover .heading-wrap {
  h1 {
    -webkit-text-stroke-color: #FF8B00;
  }
}
.click .heading-wrap {
  h1 {
    -webkit-text-stroke-color: #1808EF;
  }
}

// @media screen and (max-width: 520px) {
//   .heading-wrap {
//     margin: 3em 1em;
//     justify-content: center;
//   }
// }




</style>
