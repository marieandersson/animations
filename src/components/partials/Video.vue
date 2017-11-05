<template>
  <div class="full-animation-two">
    <video :src="`/assets/video/${videoSources[activeState]}.mp4`" autoplay>
      Sorry, your browser doesn't support embedded videos,
      but don't worry, you can <a href="/assets/video/pinkbubble_two.mp4">download it</a>
      and watch it with your favorite video player!
    </video>
  </div>
</template>

<script>

export default {
  name: 'videoSection',
  data () {
    return {
      activeState: 'scroll',
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
