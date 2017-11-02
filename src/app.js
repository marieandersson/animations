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
if (subUrl === 'scroll' || subUrl === 'hover' || subUrl === 'click') {
  Event.$emit('sectionClicked', subUrl);
} else {
  // if sub url is unvalid, redirect to root
  window.history.replaceState('start', '', '/');
}

// handle user going back and forward in history
window.onpopstate = function (event) {
  let section = event.state;
  if (!section) section = 'start';
  Event.$emit('sectionClicked', section);
}
