<template>
  <div class="hover-ux">

    <div class="hover-ux-text">
      <h3>UX</h3>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'hoverUx',

}
</script>

<style lang="scss">
.hover-ux {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  .hover-ux-text {
    width: 60%;
  }
}

</style>
