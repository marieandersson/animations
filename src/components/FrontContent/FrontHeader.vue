<template>
  <div class="front-header">
  <!-- animate heading with canvas ? -->
    <h1>Heading</h1>
    <h2>sub-heading</h2>
  </div>
</template>

<script>

export default {
  name: 'frontHeader',
}
</script>

<style lang="scss">
.front-header {
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1, h2 {
    color: #fff;
    margin: 0;
  }
}

</style>
