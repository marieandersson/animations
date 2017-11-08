<template>
  <div class="ux">
    <roll></roll>
    <div v-for="n in 2" class="ux-text">
      <h2>What not to!</h2>
      <p> {{ texts[activeState] }} </p>
    </div>
  </div>
</template>

<script>
import roll from '../animations/Roll.vue';

export default {
  name: 'ux',
  components: {
    roll
  },
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
  width: 100%;
  height: 750px;
  position: relative;
  margin-top: 200px;
  .ux-text {
    transition: all 1s linear;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    margin: 0;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 240px 280px 0 0;
    color: #fff;
    h2 {
      transform: rotate(-90deg) translate(20px, -30px);
    }
    p {
      width: 500px;
    }
    // &:nth-child(2) {
    //   color: #000;
    // }
    &:hover {
      transform: translate(-4px, 4px);
      transition: 0.1s ease-out;
    }
  }
}
.scroll .ux {
  .ux-text {
    transform: translateX(1000px);
  }
  .active-ux-text {
  transform: translateX(0);
  }
}

@media screen and (max-width: 1400px) {
  .ux {
    .ux-text {
      padding: 200px 240px 0 0;
    }
  }
}
@media screen and (max-width: 1250px) {
  .ux {
    margin-top: 100px;
    height: 600px;
    .ux-text {
      padding: 150px 150px 0 0;
    }
  }
}
@media screen and (max-width: 1150px) {
  .ux {
    margin-top: 0;
    height: 800px;
    .ux-text {
      padding: 130px 50px 0 0;
    }
  }
}
@media screen and (max-width: 1150px) {
  .ux {
    height: 650px;
  }
}
@media screen and (max-width: 850px) {
  .ux {

  }
}
//     height: 700px;
//     .ux-text {
//       justify-content: flex-start;
//       padding: 0;
//     }
//   }
// }
// @media screen and (max-width: 750px) {
//   .ux {
//     .ux-text {
//       flex-direction: column;
//       justify-content: center;
//       align-items: flex-start;
//       h2 {
//         transform: rotate(0) translate(0, 0);
//       }
//     }
//   }
// }
// @media screen and (max-width: 690px) {
//     .ux {
//       .ux-text {
//         p {
//           width: 100%;
//         }
//       }
//     }
// }
// @media screen and (max-width: 550px) {
//   .ux {
//      height: 450px;
//     .ux-text {
//       padding: 1em;
//     }
//   }
// }
// @media screen and (max-width: 420px) {
//   .ux {
//
//     height: 540px;
//     .ux-text {
//       padding: 1em;
//     }
//   }
// }
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
