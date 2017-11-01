<template>
  <div class="hover-header">
  <!-- animate heading with canvas ? -->
    <h1>Heading</h1>
    <h2>sub-heading</h2>
  </div>
</template>

<script>

export default {
  name: 'hoverHeader',
}
</script>

<style lang="scss">
.hover-header {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 5em 0 0 5em;
  margin-bottom: 5em;
  h2, h3 {
    margin: 0;
  }
}
</style>
