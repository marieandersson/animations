<template>
  <div class="about">
    <bubbleOne></bubbleOne>
    <div class="about-text">
      <h2>Where to?</h2>
      <p v-html="texts[activeState]"></p>
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
        start: 'This project is a collaboration between three students from Digital Design and Web Development at Yrgo. We wanted to explore how a website could be brought to life by adding a variety of decorative animations to it. We have experimented with three different triggers - scroll, hover and click. This landing page is quite boring; grey, dull and static, but have a look around to see the difference some animations and color can make to it!',
        scroll: 'Scroll animations can be added to liven up a lengthy page through triggering different animations when scrolling. A popular scrolling effect is parallax, where an element can pop in from different directions. Applying scroll animations can give your page a dramatic effect or a touch of elegance. Scroll down to see some animations that we’ve experimented with and see if you like it!',
        hover: 'Hover effects draw attention to a website and make it for engaging for the user. They are mostly used in designs to improve style and usability, whilst adding extra energy to websites. The best hover effects help the user and enhance their experience. On this page we have experimented with different hover animation. Hover around and see how it affects your own experience!',
        click: 'On this webpage we have experimented with click-triggered animations. Click animation is mostly used for buttons and menus, but it can also be used with decorative animations that create user interaction. Click animations can incorporate drag elements, drawing, double click and hold-in click, and are a fun way to enhance user engagement. Have a click around!'
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
    height: 870px;
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
    height: 460px;
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
