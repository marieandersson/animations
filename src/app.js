'use strict';
import Vue from 'vue';
import Application from './Application';

var bus = new Vue({
  el: '#app',
  template: '<Application/>',
  components: { Application }
})
