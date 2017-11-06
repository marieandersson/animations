<template>
  <div class="about">
    <bubbleOne></bubbleOne>
    <div class="about-text">
      <h2>Where to?</h2>
      <p> {{ texts[activeState] }} </p>
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
  },
  data () {
    return {
      activeState: 'start',
      texts: {
        start: 'Start: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.',
        scroll: 'Scroll: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.',
        hover: 'Hover: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.',
        click: 'Click: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.'
      }
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
  }
}
</script>

<style lang="scss">
.about {
  width: 100%;
  height: 650px;
  padding: 0 5em;
  position: relative;
  .about-text {
    display: flex;
    flex-direction: row;
    margin: 200px 0 0;
    width: 100%;
    justify-content: center;
    transform: translateX(-50px);
    p {
      width: 500px;
    }
  }
}
@media screen and (max-width: 1440px) {
  .about {
    height: 550px;
    .about-text {
      margin-top: 140px;
    }
  }
}
@media screen and (max-width: 1150px) {
  .about {
    height: 620px;
    .about-text {
      margin-top: 200px;
    }
  }
}
@media screen and (max-width: 1000px) {
  .about {
    height: 620px;
    .about-text {
      margin-top: 200px;
    }
  }
}
@media screen and (max-width: 900px) {
  .about {
    height: 580px;
    padding: 1em;
    .about-text {
      p {
        width: 100%;
      }
    }
  }
}
</style>
