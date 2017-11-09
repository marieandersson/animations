<template>
  <div>
    <div v-for="n in 2" class="ux-text">
      <h2>What not to!</h2>
      <p> {{ texts[activeState] }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'uxText',
  data () {
    return {
      activeState: 'start',
      texts: {
        start: 'Start: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.',
        scroll: 'Scroll: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden. Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet.',
        hover: 'Hover: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.',
        click: 'Click: Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden.'
      },
      scrolling: false
    }
  },
  methods: {
    scrollAnimate() {
      const uxText = this.$el.querySelector('.ux-text');
      window.clearTimeout( this.scrolling );
      uxText.classList.add('scroll-blur');
      this.scrolling = setTimeout(function() {
        uxText.classList.remove('scroll-blur');
      }, 66);
    },
    clickAnimate() {
      const uxText = this.$el.querySelector('.ux-text');
      if (this.activeState === 'click') {
      uxText.classList.add('blur-text');
      uxText.addEventListener('animationend', () => {
        uxText.classList.remove('blur-text');
      });
      }
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
    });
    Event.$on('rollClicked', () => {
      this.clickAnimate();
    });
    Event.$on('scrolling', () => {
      this.scrollAnimate();

    });
  }
}

</script>

<style lang="scss">
.ux-text {
  transition: all 0.2s linear;
  position: absolute;
  width: calc(100vw - 60px);
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 0;
  right: 0;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 240px 150px 0 0;
  color: #fff;
  h2 {
    transform: rotate(-90deg) translate(20px, -30px);
  }
  p {
    width: 500px;
  }
  /*// &:nth-child(2) {
  //   color: #000;
  // } */
}
.hover .ux-text {
  &:hover {
    transform: translate(-4px, 4px);
    transition: 0.2s ease-out;
  }
}
@keyframes blur {
  from {
    transform: translate(-4px, 4px);
  }
  to {
    transform: translate(0);
  }
}
.blur-text {
  animation: .5s ease-in-out blur;
}
.scroll .scroll-blur {
  transform: translate(-4px, 4px);
}

@media screen and (max-width: 1350px) {
  .ux-text {
    padding: 180px 100px 0 0;
  }
}
@media screen and (max-width: 1150px) {
  .ux-text {
    padding: 250px 100px 0 0;
  }
}
@media screen and (max-width: 1000px) {
  .ux-text {
    padding: 200px 100px 0 0;
  }
}
@media screen and (max-width: 850px) {
  .ux-text {
    padding: 220px 100px 0 0;
  }
}
@media screen and (max-width: 750px) {
  .ux-text {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 150px 0 0 0;
    h2 {
      width: 500px;
      transform: rotate(0) translate(0, 0);
    }
  }
}
@media screen and (max-width: 690px) {
  .ux-text {
    padding: 170px 3em 0;
    h2, p {
      width: 100%;
    }
  }
}
@media screen and (max-width: 600px) {
  .ux-text {
    width: calc(100vw - 40px);
  }
}
@media screen and (max-width: 430px) {
  .ux-text {
    padding: 200px 1em 0;
  }
}
</style>
