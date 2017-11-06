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
  height: 650px;
  padding: 0 5em 0 0;
  position: relative;
  display: flex;
  align-items: center;
  .about-text {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    p {
      width: 500px;
    }
  }
}
@media screen and (max-width: 1440px) {
  .about {
    height: 750px;

  }
}
@media screen and (max-width: 1000px) {
  .about {
    padding: 0 2em 0 0;
    height: 100vh;
    .about-text {
      justify-content: flex-start;
    }
    p {
      width: 100%;
    }
  }
}
@media screen and (max-width: 820px) {
  .about {
    height: 750px;
  }
}
@media screen and (max-width: 750px) {
  .about {
    height: 750px;
    padding: 0 3em;
    .about-text {
      align-items: center;
      flex-direction: column;
      h2 {
        width: 500px;
      }
    }

  }
}
@media screen and (max-width: 690px) {
  .about {
    height: 580px;
    .about-text {
      h2, p {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 480px) {
  .about {
    align-items: flex-start;
    height: 400px;
  }
}
@media screen and (max-width: 430px) {
  .about {
    padding: 0 1em;
  }
}
@media screen and (max-width: 320px) {
  .about {
      height: 500px;
  }
}
// @media screen and (max-width: 900px) {
//   .about {
//     height: 580px;
//     padding: 1em;
//     .about-text {
//       p {
//         width: 100%;
//       }
//     }
//   }
// }
</style>
