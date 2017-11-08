<template>
  <div class="full-animation-two">
    <img v-if="activeState === 'start'" src="/images/blackbubble7.png" alt="Black Bubble">
    <video v-else :src="`/video/${videoSources[activeState]}.mp4`">
      Sorry, your browser doesn't support embedded videos,
      but don't worry, you can <a :href="`/video/${videoSources[activeState]}.mp4`">download it</a>
      and watch it with your favorite video player!
    </video>
  </div>
</template>

<script>

export default {
  name: 'videoSection',
  data () {
    return {
      activeState: 'start',
      videoSources: {
        start: '',
        scroll: 'pinkbubblemov',
        hover: 'orangebubblemov',
        click: 'bluebubblemov'
      }
    }
  },
  created () {
    Event.$on('activeState', clickedNavItem => {
      this.activeState = clickedNavItem;
      Event.$on('scrolling', () => {
        if (this.activeState === 'scroll') {
          const rect = this.$el.getBoundingClientRect();
          const windowheight = (window.innerHeight || document.documentElement.clientHeight);
          if (rect.top <  windowheight * 0.8) {
            this.$el.querySelector('video').play();
          } else {
            this.$el.querySelector('video').pause();
          }
        }
      });
    });
  }
}
</script>

<style lang="scss">
.full-animation-two {
  width: 100%;
  video {
    margin: 0;
    width: 100%;
  }
}

</style>
