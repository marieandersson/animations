<template>
  <div class="heading-wrap">
    <h1>{{ headings[activeState ]}}<br>Animations</h1>
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
.heading-wrap {
  margin: 5em;

}
.start {
  h1 {
    color: #000;
  //  @include longShadow(darken('#ccc', 10%), 120);
    text-shadow:
    -1px 1px 0 #ccc, -2px 2px 0 #ccc, -3px 3px 0 #ccc, -4px 4px 0 #ccc,
    -5px 5px 0 #ccc, -6px 6px 0 #ccc, -7px 7px 0 #ccc, -8px 8px 0 #ccc, -8px 8px 0 #ccc,
    -9px 9px 0 #ccc, -10px 10px 0 #ccc, -11px 11px 0 #ccc, -12px 12px 0 #ccc;
  }

  // @function setLongShadow($color, $length) {
  //   $value: 0 0 $color;
  //
  //   @for $i from 1 through $length {
  //     $value: #{$value}, #{$i}px #{$i}px #{$color};
  //   }
  //
  //   @return $value;
  // }

  // @mixin longShadow($color, $length:200) {
  //   text-shadow: setLongShadow($color, $length);
  // }
}
.scroll {
  h1 {
    color: #F40000;
    text-shadow:
    -1px 1px 0 #FF0098, -2px 2px 0 #FF0098, -3px 3px 0 #FF0098, -4px 4px 0 #FF0098,
    -5px 5px 0 #FF0098, -6px 6px 0 #FF0098, -7px 7px 0 #FF0098, -8px 8px 0 #FF0098, -8px 8px 0 #FF0098,
    -9px 9px 0 #FF0098, -10px 10px 0 #FF0098, -11px 11px 0 #FF0098, -12px 12px 0 #FF0098;
  }
}
.hover {
  h1 {
    color: #000;
    text-shadow:
    -1px 1px 0 #ccc, -2px 2px 0 #ccc, -3px 3px 0 #ccc, -4px 4px 0 #ccc,
    -5px 5px 0 #ccc, -6px 6px 0 #ccc, -7px 7px 0 #ccc, -8px 8px 0 #ccc, -8px 8px 0 #ccc,
    -9px 9px 0 #ccc, -10px 10px 0 #ccc, -11px 11px 0 #ccc, -12px 12px 0 #ccc;
  }
}
.click {
  h1 {
    color: #000;
    text-shadow:
    -1px 1px 0 #ccc, -2px 2px 0 #ccc, -3px 3px 0 #ccc, -4px 4px 0 #ccc,
    -5px 5px 0 #ccc, -6px 6px 0 #ccc, -7px 7px 0 #ccc, -8px 8px 0 #ccc, -8px 8px 0 #ccc,
    -9px 9px 0 #ccc, -10px 10px 0 #ccc, -11px 11px 0 #ccc, -12px 12px 0 #ccc;
  }
}




</style>
