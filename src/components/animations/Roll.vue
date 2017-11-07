<template>
  <div class="roll">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1286 557">
      <defs>
        <linearGradient id="linear-gradient" x1="-154.36" y1="3.45" x2="-154.36" y2="4.46" gradientTransform="translate(177950 -1745.28) scale(1148 516.57)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff0098"/>
          <stop offset="1" stop-color="#f40000"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="-153.91" y1="4.5" x2="-153.91" y2="5.5" gradientTransform="translate(40974.44 -374.34) scale(265.29 160.65)" xlink:href="#linear-gradient"/>
      </defs>
      <title>rollstart</title>
      <rect class="cls-1" x="-22.4" y="-27.3" width="1359.8" height="656.1"/>
      <path id="path-2" class="cls-2" d="M313.9,82.4c47.2,4.5,131,17.2,251.4,12.8,180.6-6.7,229-58.3,359.3-58.3,86.9,0,218,30.5,393.3,76.2v448c-168.4-48.7-298.8-81.4-391-82.7-143-2-325.3,55.7-447,55-108.4-.3-204.4-14.4-310-21.3,62-4.7,100.9-24.9,110.9-62.2C287.3,412.9,294.6,289.5,313.9,82.4Z"/>
      <path id="Stroke-1" class="cls-3" d="M54.6,55.8A33.06,33.06,0,0,1,65,35.4C81,20.7,119.8-3.5,197.6,5.5c79.3,9.2,105.1,40.7,113.3,57.4a31.47,31.47,0,0,1,3,17.1L276.2,452a31.87,31.87,0,0,1-2.2,9.1c-6.5,16.4-31.9,55.7-129.8,49.2-106-7-129.5-66.4-133.7-80.9-.6-1.9-1.4-12.6-1.2-14.5Z"/>
      <path id="Path-3" class="cls-4" d="M10.4,416.7c5-42,36-77,139-65s128,67,126,95-47,74-141,61S7.4,440.7,10.4,416.7Z"/>
    </svg>
  </div>
</template>

<script>
export default {
name: 'roll'
}

</script>

<style lang="scss">
.roll {
  position: absolute;
  height: 100%;
  width: 80%;
  right: 0;

  .cls-1 {
    fill:#e6e6e6;
  }
  .cls-2,.cls-3 {
    stroke:#fff;
  }
  .cls-2 {
    stroke-width:5px;
    fill:url(#linear-gradient);
  }
  .cls-3 {
    fill:#fff;
    stroke-width:7px;
  }
  .cls-4 {
    fill:url(#linear-gradient-2);
  }
}
</style>
