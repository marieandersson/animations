'use strict';
import Vue from 'vue';
import Application from './Application';

window.Event = new Vue();

new Vue({
  el: '#app',
  template: '<Application/>',
  components: { Application }
})

// check initial url/state
const subUrl = location.pathname.substring(1).toLowerCase();
if (subUrl === 'scroll') {
  Event.$emit('sectionClicked', 1);
} else if (subUrl === 'hover') {
  Event.$emit('sectionClicked', 2);
} else if (subUrl === 'click') {
  Event.$emit('sectionClicked', 3);
} else {
  // if sub url is unvalid, redirect to root
  window.history.replaceState(0, '', '/');
}

// handle user going back and forward in history
window.onpopstate = function (event) {
  let section = event.state;
  if (!section) section = 0;
  Event.$emit('sectionClicked', section);
}

// document.querySelectorAll('.section').forEach(section => {
//   console.log(section);
//   section.addEventListener('transitionend', function (event) {
//     console.log('end');
//   });
// })
