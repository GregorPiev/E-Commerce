var $ = require('jquery');
require('./less/index.js');
window.jQuery = $;
window.$ = $;
require('bootstrap/dist/js/bootstrap.min.js');
let Vue = require('vue/dist/vue.common.js');
window.Vue = Vue;
require('./app');

