<template>
  <div class="about">
    <bubbleOne></bubbleOne>
    <div class="about-text">
      <h2>Where to</h2>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.</p>
    </div>
    <bubbleTwo></bubbleTwo>
  </div>
</template>

<script>
import bubbleOne from '../animations/BubbleOne.vue';
import bubbleTwo from '../animations/BubbleTwo.vue';

export default {
  name: 'about',
  components: {
    bubbleOne,
    bubbleTwo
  }
}
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 100vh;
  padding: 4em 5em 6em;
  .about-text {
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 100%;
    justify-content: center;
    p {
      width: 500px;
    }
  }
}

</style>
