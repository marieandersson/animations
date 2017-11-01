<template>
  <main v-bind:class="activeState">
    <div class="content-wrap">
      <heading></heading>
      <about></about>
      <how></how>
      <fullAnimationOne></fullAnimationOne>
      <ux></ux>
      <fullAnimationTwo></fullAnimationTwo>
    </div>
  </main>
</template>

<script>
import heading from './partials/Heading.vue';
import about from './partials/About.vue';
import how from './partials/How.vue';
import fullAnimationOne from './partials/FullAnimationOne.vue';
import ux from './partials/Ux.vue';
import fullAnimationTwo from './partials/FullAnimationTwo.vue';

export default {
  name: 'mainSection',
  components: {
    heading,
    about,
    how,
    fullAnimationOne,
    ux,
    fullAnimationTwo
  },
  data () {
    return {
      activeState: 'front',
      states: [
        {
          name: 'front',
          stateNo: 0,
          active: true
        },
        {
          name: 'scroll',
          stateNo: 1,
          active: false
        },
        {
          name: 'hover',
          stateNo: 2,
          active: false
        },
        {
          name: 'click',
          stateNo: 3,
          active: false
        }
      ]
    }
  },
  created () {
    Event.$on('sectionClicked', sectionClicked => {
      let self = this;
      self.states.map(function(state) {
        if (state.stateNo == sectionClicked) {
          state.active = true;
          self.activeState = state.name;
        } else {
          state.active = false;
        }
      });
    });
  }
}
</script>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(100% - 60px);
  position: absolute;
  left: 60px;
  transition: transform .2s linear .5s;
  z-index: 11;
  .content-wrap {
    padding: 1em 10%;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: opacity .2s linear;
  }
}

</style>
