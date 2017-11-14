'use strict';
import Vue from 'vue';
import Application from './Application';

window.Event = new Vue();

new Vue({
  el: '#app',
  template: '<Application/>',
  components: { Application }
});

// check initial url/state
const subUrl = location.pathname.substring(1).toLowerCase();
if (subUrl === 'scroll' || subUrl === 'hover' || subUrl === 'click') {
  Event.$emit('activeState', subUrl);
} else {
  // if sub url is unvalid, redirect to root
  window.history.replaceState('start', '', '/');
}

// handle user going back and forward in history
window.onpopstate = function (event) {
  let section = event.state;
  if (!section) section = 'start';
  Event.$emit('activeState', section);
};

// TODO: use Vue mixins for this function?
window.isElementInViewport = function (el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
//    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) // &&
  //  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
