<template>
  <div class="bubble-one">

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 299 278">
      <defs>
        <linearGradient id="linear-gradient" x1="121.28" y1="72.08" x2="230.33" y2="228.09" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff1aa2"/>
          <stop offset="1" stop-color="#f40000"/>
        </linearGradient>
      </defs>
      <title>animation1-start</title>
      <path class="cls-1 grey" d="M257.18,131.28c0,50.09-38.6,114.79-99.24,114.79S41.82,197.43,41.82,147.35,86.75,28,147.39,28,257.18,81.19,257.18,131.28Z"/>
      <path class="cls-2 pink" d="M244.76,145.93c0,34.63-24.72,79.38-63.55,79.38S106.84,191.67,106.84,157s28.78-82.55,67.61-82.55S244.76,111.29,244.76,145.93Z"/>
    </svg>

  </div>
</template>

<script>

export default {
  name: 'bubbleOne',
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
