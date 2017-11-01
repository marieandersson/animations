<template>
  <div class="how">

    <div class="how-text">
      <h3>Teknik/How to</h3>
      <p>Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden</p>
    </div>
    <div class="github-button">
      <a href="#">GitHub</a>
    </div>

  </div>
</template>

<script>

export default {
  name: 'how',

}
</script>

<style lang="scss">
.how {
  border-bottom: 1px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  .how-text {
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
  .github-button {
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

</style>
