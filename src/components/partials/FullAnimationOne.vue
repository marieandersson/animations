<template>
  <div class="full-animation-one">
    <video src="/assets/video/animationfree3.mp4" autoplay>
      Sorry, your browser doesn't support embedded videos,
      but don't worry, you can <a href="/assets/video/animationfree3.mp4">download it</a>
      and watch it with your favorite video player!
    </video>
  </div>
</template>

<script>

export default {
  name: 'fullAnimationOne',

}
</script>

<style lang="scss">
.full-animation-one {
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
