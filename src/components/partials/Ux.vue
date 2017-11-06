<template>
  <div class="ux">
    <div class="ux-text">
      <h2>What not to!</h2>
      <p> {{ texts[activeState] }} </p>
    </div>
    <div class="ux-text">
      <h2>What not to!</h2>
      <p> {{ texts[activeState] }} </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ux',
  data () {
    return {
      activeState: 'start',
      texts: {
        start: 'Start: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.',
        scroll: 'Scroll: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden. Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet.',
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
.ux {
  width: calc(100% - 300px);
  background: #fff;
  height: 700px;
  position: relative;
  margin: 150px;
  border: solid 10px;
  .ux-text {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    justify-content: center;
    align-items: center;
    padding-right: 8em;
    h2 {
      transform: rotate(-90deg) translate(105px, -30px);
    }
    p {
      width: 500px;
    }
    &:hover {
      transform: translate(2px, 2px);
      transition: 0.1s ease-out;
    }
  }
}
@media screen and (max-width: 1150px) {
  .ux {
    width: calc(100% - 100px);
    margin: 50px;
    height: 600px;
    .ux-text {
      justify-content: flex-start;
    }
  }
}
@media screen and (max-width: 980px) {
  .ux {
    .ux-text {
      p {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 750px) {
  .ux {
    height: 400px;
    .ux-text {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0 2em;
      h2 {
        transform: rotate(0) translate(0, 0);
      }
    }
  }
}
@media screen and (max-width: 550px) {
  .ux {
    width: calc(100% - 40px);
    margin: 20px;
     height: 450px;
    .ux-text {
      padding: 1em;
    }
  }
}
@media screen and (max-width: 420px) {
  .ux {

    height: 540px;
    .ux-text {
      padding: 1em;
    }
  }
}
.start .ux {
  border-color: #000;
}
.scroll .ux {
  border-color: #F40000;
}
.hover .ux {
  border-color: #EE3F00;
}
.click .ux {
  border-color: #001F44;
}

</style>
