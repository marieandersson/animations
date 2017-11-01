<template>
  <div class="scroll-about">
    <div class="scroll-about-text">
      <h3>Allmänt/Where to</h3>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
    </div>
  </div>
</template>

<script>
import bubbleOne from '../animations/BubbleOne.vue';
import bubbleTwo from '../animations/BubbleTwo.vue';

export default {
  name: 'scrollAbout',
  components: {
    bubbleOne,
    bubbleTwo
  }
}
</script>

<style lang="scss">
.scroll-about {
  display: flex;
  flex-direction: row;
  .scroll-about-text {
    width: 50%;
  }
  h3, p {
    color: #fff;
  }
}

</style>
