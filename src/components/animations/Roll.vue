<template>
  <div class="roll">
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1737.8 838.3"><defs>
      <linearGradient id="roll-gradient" x1="244.95" y1="617.25" x2="184.68" y2="839.23" gradientTransform="translate(69.12 -139.39) rotate(9.65)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ff0098"/>
        <stop offset="1" stop-color="#f40000"/>
      </linearGradient>
      <linearGradient id="roll-gradient-2" x1="1043.96" y1="688.09" x2="966.87" y2="99.57" gradientTransform="matrix(1, 0, 0, -1, 0, 838)" gradientUnits="userSpaceOnUse">
        <stop offset="0.2" stop-color="#ff0098"/>
        <stop offset="1" stop-color="#f40000"/>
      </linearGradient>
    </defs>
    <title>rollstart5</title>
    <path class="cls-1" d="M87.1,271.7l49.3-204s8.2-46.2,68.6-52.6,102.6,1.8,151,40.7,56.8,73.2,52.1,102.4S296.5,683.1,296.5,683.1s-20.9,52.5-68.1,64.3c-52.8,13.2-134-21.9-170.5-45.6C26,681.1-6.2,635.9,17.8,547.5S87.1,271.7,87.1,271.7Z"/><path class="cls-2" d="M20.2,563c4.9-22.3,33.4-102.7,154.2-69,143.7,40.1,142.7,116.8,119.8,184.1-9.2,26.9-57.6,75.1-125.5,59.4C23.2,704.1,3.9,636.8,20.2,563Z"/><path class="cls-3" d="M685.2,196.1c163.6-22.3,403-101.5,624.9-71.1,218.4,29.9,316.4,58.1,427.7,89.7V838.3s-340.5-105.5-461.5-127.8c-171.7-31.6-364.1,48.3-566.2,88.4-198.5,39.4-528.1-54-528.1-54,10.2-1.2,101.8,4.7,120.7-79.5,13.4-59.9,26.7-125,46.1-220.7,23.7-117,56.1-286.4,56.1-286.4S513.9,219.5,685.2,196.1Z"/>
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
  width: 100%;
  right: 0;

  .cls-1 {
    fill:#fff;
  }
  .cls-2 {
    fill:url(#roll-gradient);
  }
  .cls-3 {
    stroke:#fff;
    stroke-width:6.53px;
    fill:url(#roll-gradient-2);
  }
}
</style>
