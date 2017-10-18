<template>
  <div id="app">
    <h1>Animations</h1>
    <click></click>
    <hover></hover>
    <scroll></scroll>
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

<style>
h1 {
  color: red;
}
</style>
