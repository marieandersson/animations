<template>
  <div class="about">
    <bubbleOne></bubbleOne>
    <div class="about-text">
      <h3>Where to</h3>
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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4em 0 6em;
  .about-text {
    width: 500px;
    margin: 0 5em;
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 24px;
    }
  }
}

</style>
