<template>
  <div class="how">

    <div class="how-text">
      <h2><span>How to?</span></h2>
      <p v-html="texts[activeState]"></p>
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
        start: 'The animations on this site are built with CSS, JavaScript and SVG. They all behave a little different depending on what triggers them. If you want to check out how it’s all been done, you can visit <a href="https://github.com/marieeriksson/animations">GitHub. </a>A special thanks to <a href="http://snapsvg.io/">Snap.svg </a>for providing such an awesome SVG animation library.',
        scroll: 'To get the animations triggered by scrolling you have to be aware of both when the user is scrolling and where the elements are positioned relative to the viewport at that moment. The animation should be triggered when in view, or else the user might not see it. Check out <a href="https://github.com/marieeriksson/animations">GitHub </a>for more information about the code.',
        hover: 'The elements on this page are animated in two ways. Some elements are animated when the user is hovering over them, and some are based on the cursor’s position in relation to themselves. There’s a lot of math going on with those eyes! Do you want to try it yourself? Check out exactly how we did it at <a href="https://github.com/marieeriksson/animations">GitHub. </a>',
        click: 'To animate on click you simply have to keep track of when the user is clicking on the specific element. On this page it will trigger a SVG animation or one made with only CSS. In the later example the animation happens when adding and removing HTML classes with different styles. Check out the code on <a href="https://github.com/marieeriksson/animations">GitHub. </a>'
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
    h2 {
      transform: rotate(-90deg) translate(57px, 15px);
    }
    p {
      width: 500px;
    }
    a {
      color: #fff;
      text-decoration-style: wavy;
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
      h2 {
        transform: rotate(0) translate(0, 0);
      }
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
