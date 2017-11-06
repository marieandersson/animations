<template>
  <div class="how">

    <div class="how-text">
      <h2>How to</h2>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.</p>
    </div>
    <div class="github-button">
      <a href="#">GitHub</a>
    </div>
    <hand></hand>

  </div>
</template>

<script>
import hand from '../animations/Hand.vue';

export default {
  name: 'how',
  components: {
    hand
  }

}
</script>

<style lang="scss">
.how {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  .how-text {
    display: flex;
    flex-direction: row;
    margin: 0;
    width: 100%;
    justify-content: center;
    color: #fff;
    width: 50%;
    z-index: 2;
  }
  .github-button {
    z-index: 2;
    width: 150px;
    height: 50px;
    background: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
.start .how {
  background: linear-gradient(#e6e6e6, #000000);
}
.scroll .how {
  background: linear-gradient(#FF0098, #F40000);
}
.hover .how {
  background: linear-gradient(#FF8B00, #EE3F00);
}
.click .how {
  background: linear-gradient(#1808EF, #001F44);
}
</style>
