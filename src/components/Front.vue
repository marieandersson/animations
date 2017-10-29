<template>
  <div :class="open ? 'open' : '' " class="section front-section" data-sec="0">
    <div class="background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 2152.21">
        <title>1_Bakgrund copy 3@2x100</title>
        <g id="Layer_3" data-name="Layer 3">
          <polygon class="cls-1" points="270.3 1742.7 355.64 1887.3 123.62 1872.72 114 1754.86 270.3 1742.7"/>
          <polygon class="cls-1" points="1095.54 403.43 992.03 271.22 1161.26 226.65 1248.9 370.95 1095.54 403.43"/>
          <path class="cls-2" d="M1366,995.74h-.76v313h-1l-330.37,192.78s-401.66,209.58-758.73,247.37c-161.46,17.08-122.66,83.67-118,89.77s20.94,33,103.21,21.82c72-9.82,98.89,24.86,103.69,37.3s25.71,57.14-129.77,137.27C61.81,2123.92,0,2108.53,0,2108.53V984.17H-.19L.18,864.86C440.63,917,742.72,482,1091.76,397.74c157.82-38.11,110.63-99,105.17-104.47s-25.09-30-105.17-8.1c-70.08,19.17-101.3-11.68-107.69-23.39s-33-53.27,110.65-153.09C1254.08-2.07,1365.24,0,1365.24,0Z"/>
          <line class="cls-3" x1="1203.71" y1="308.52" x2="1366" y2="768"/>
          <line class="cls-3" x1="152.51" y1="1824.04" x2="48.93" y2="1347.87"/>
        </g>
      </svg>
    </div>
    <h2>Front Page</h2>
  </div>
</template>

<script>
export default {
  name: 'frontPage',
  data () {
    return {
      open: true,
      sectionNo: 0
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      if (sectionClicked == this.sectionNo) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  }
}
</script>

<style lang="scss">
.front-section {
  background: #000;
  h2 {
    color: #fff;
  }
  .background {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
  }
}

</style>
