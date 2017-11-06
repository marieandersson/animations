<template>
  <div class="how">

    <div class="how-text">
      <h2>How to?</h2>
      <p> {{ texts[activeState] }} </p>
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
.how {
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  .how-text {
    display: flex;
    flex-direction: row;
    margin: 100px 0 150px;
    justify-content: center;
    color: #fff;
    p {
      width: 500px;
    }
  }
}
@media screen and (max-width: 1270px) {
  .how {
    height: 600px;
    .how-text {
      align-self: flex-end;
    }
  }
}
@media screen and (max-width: 1050px) {
  .how {
    height: 700px;
    .how-text {
      align-self: flex-start;
    }
  }
}
@media screen and (max-width: 750px) {
  .how {
    justify-content: center;
    height: 650px;
    .how-text {
      margin-top: 70px;
      flex-direction: column;
    }
  }
}
@media screen and (max-width: 690px) {
  .how {
    padding: 0 3em;
    .how-text {
      h2, p {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .how {
    height: 550px;
    padding: 0 1em;
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
