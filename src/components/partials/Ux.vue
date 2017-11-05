<template>
  <div class="ux">

    <div class="ux-text">
      <h3>What not to / UX</h3>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ux',

}
</script>

<style lang="scss">
.ux {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10%;
  .ux-text {
    width: 500px;
    h3 {
      font-size: 26px;
    }
    p {
      font-size: 24px;
      line-height: 1.3;
      margin: 0;
    }
  }
}

</style>
