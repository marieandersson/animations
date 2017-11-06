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
