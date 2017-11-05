<template>
    <canvas class="heading-canvas"></canvas>
</template>

<script>

export default {
  name: 'headingText',
  data () {
    return {
      activeState: 'start',
      iterations: 100,
      textPosition: {
        x: 0,
        y: 450
      },
      textVelocity: {
        x: 6,
        y: -3
      }

    }
  },
  methods: {
    drawText(context) {
      context.font = 'bold 80px Poppins';
      context.textAlign = 'right';
      context.lineWidth = '1';
      context.textBaseline = 'middle';

      const startRgb = [244, 0, 0];
      const stopRgb = [255, 0, 152];
      let currentRgb = [startRgb[0], startRgb[1], startRgb[2]];

      for (let i = 0; i < this.iterations; i++) {
        currentRgb[0] = currentRgb[0] + ((stopRgb[0] - startRgb[0]) / this.iterations);
        currentRgb[1] = currentRgb[1] + ((stopRgb[1] - startRgb[1]) / this.iterations);
        currentRgb[2] = currentRgb[2] + ((stopRgb[2] - startRgb[2]) / this.iterations);
        this.textPosition.x = this.textPosition.x + this.textVelocity.x;
        this.textPosition.y = this.textPosition.y + this.textVelocity.y;
        context.fillStyle = `rgb(${Math.round(currentRgb[0])}, ${Math.round(currentRgb[1])}, ${Math.round(currentRgb[2])})`;
        context.fillText('ANIMATIONS', this.textPosition.x, this.textPosition.y);
        context.strokeStyle = '#FFF';
        context.strokeText('ANIMATIONS', this.textPosition.x, this.textPosition.y);
      }
    }
  },
  mounted() {
    const canvas = this.$el;
    const context = canvas.getContext('2d');
    // scale canvas to look good on retina
    const scale = window.devicePixelRatio || 1;
    canvas.height = window.innerHeight * scale / 1.5;
    canvas.width = window.innerWidth * scale;
    context.scale(scale, scale);

    if (window.devicePixelRatio > 1) {
      canvas.style.height = `${canvas.height / 2}px`;
      canvas.style.width = `${canvas.width / 2}px`;
    }
    // center positions for all screens
    const centerWidth = canvas.width / (2 * scale);
    const centerHeight = canvas.height / (2 * scale);

    context.clearRect(0, 0, canvas.width, canvas.height);
    this.drawText(context);
  }
}

</script>

<style lang="scss">
</style>
