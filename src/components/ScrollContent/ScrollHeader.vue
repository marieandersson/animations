<template>
  <div class="scroll-header">
  <!-- animate heading with canvas ? -->
    <h2>Heading</h2>
    <h3>sub-heading</h3>
  </div>
</template>

<script>

export default {
  name: 'scrollHeader',
}
</script>

<style lang="scss">
.scroll-header {
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2, h3 {
    margin: 0;
  }
}

</style>
