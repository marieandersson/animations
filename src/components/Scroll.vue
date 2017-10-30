<template>
  <div :class="open ? 'open' : '' " class="section scroll-section" data-sec="1">
    <div class="section-content">
      <h2>Scroll</h2>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som  Aldus PageMaker.</p>
      <div class="box">
      </div>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som  Aldus PageMaker.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'scrollSection',
  data () {
    return {
      open: false,
      sectionNo: 1
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      if (sectionClicked == this.sectionNo) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  }
}
</script>

<style lang="scss">
.scroll-section {
  .section-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  h2 {
    color: #fff;
  }
  .box {
    width: 500px;
    height: 500px;
    margin: 5em 0;
    background-color: pink;
  }
}
</style>
