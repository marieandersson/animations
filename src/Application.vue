<template>
  <div id="app">
    <h1>Animations</h1>
    <div class="sections">
      <click></click>
      <hover></hover>
      <scroll></scroll>
    </div>
  </div>
</template>

<script>
import click from './components/Click.vue';
import hover from './components/Hover.vue';
import scroll from './components/Scroll.vue';

export default {
    name: 'app',
    components: {
      click,
      hover,
      scroll
    }
}
</script>

<style lang="scss">
.sections {
  position: absolute;
  display: flex;
  flex-direction: row;
  min-height: 100%;
  width: 100%;
}
</style>
