<template>
  <div class="header">
  <!-- animate heading with canvas ? -->
    <h1>Rubrik</h1>
    <h2>Type somehing</h2>
  </div>
</template>

<script>

export default {
  name: 'header',
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
  padding: 15% 0 0 15%;
  margin: 0;
  h1 {
    transition: all .3s linear;
    font-size: 8em;
    color: #fff;
    margin: 0;
  }
  h2 {
    transition: all .3s linear;
  }
}
.front .header {
  h1 {
    text-shadow: -5px 5px 0 #000;
  }
}
.scroll .header {
  h1 {
    text-shadow: -5px 5px 0 #FF0098;
  }
  h2 {
    color: #FF0098;
  }
}
.hover .header {
  h1 {
    text-shadow: -5px 5px 0 #EE3F00;
  }
  h2 {
    color: #EE3F00;
  }
}
.click .header {
  h1 {
    text-shadow: -5px 5px 0 #1808EF;
  }
  h2 {
    color: #1808EF;
  }
}
</style>
