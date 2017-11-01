<template>
  <div class="header">
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
.header {
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 5em 0 0 5em;
  transition: color .3s linear;
  h2, h3 {
    margin: 0;
  }
}
.front .header {
  color: #1808EF;
}
.scroll .header {
  color: #FF0098;
}
.hover .header {
  color: #FF8B00;
}
.click .header {
  color: #1808EF;
}
</style>
