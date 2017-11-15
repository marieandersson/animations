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
let subUrlParts = location.pathname.split('/');
const subUrl = subUrlParts[subUrlParts.length - 1].toLowerCase();

// console.log(location);
if (subUrl === 'scroll' || subUrl === 'hover' || subUrl === 'click') {
  Event.$emit('activeState', subUrl);
} else if (subUrl === 'start') {
  // if sub url is invalid, redirect to root
//  window.history.replaceState('start', '', '/');
} else if (subUrl.length > 0) {

  subUrlParts[subUrlParts.length - 1] = '';
  location.pathname = subUrlParts.join('/');
}

// handle user going back and forward in history
window.onpopstate = function (event) {
  let navItemName = event.state;
  if (!navItemName) navItemName = 'start';
  Event.$emit('activeState', navItemName);
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
