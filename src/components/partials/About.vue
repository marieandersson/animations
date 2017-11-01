<template>
  <div class="hover-about">
    <bubbleOne></bubbleOne>
    <div class="hover-about-text">
      <h3>Allmänt/Where to</h3>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
    </div>
    <bubbleTwo></bubbleTwo>
  </div>
</template>

<script>
import bubbleOne from '../animations/BubbleOne.vue';
import bubbleTwo from '../animations/BubbleTwo.vue';

export default {
  name: 'hoverAbout',
  components: {
    bubbleOne,
    bubbleTwo
  }
}
</script>

<style lang="scss">
.hover-about {
  border-bottom: 1px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  .hover-about-text {
    width: 60%;
    margin: 0 5em;
  }
}

</style>
