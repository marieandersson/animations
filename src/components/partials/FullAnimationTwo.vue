<template>
  <div class="full-animation-two">
    <video src="/assets/video/pinkbubble.mp4" autoplay>
      Sorry, your browser doesn't support embedded videos,
      but don't worry, you can <a href="/assets/video/pinkbubble.mp4">download it</a>
      and watch it with your favorite video player!
    </video>
  </div>
</template>

<script>

export default {
  name: 'fullAnimationTwo',

}
</script>

<style lang="scss">
.full-animation-two {
  border-bottom: 1px solid black;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  video {
    max-height: 100%;
    max-width: 100%;
  }
}

</style>
