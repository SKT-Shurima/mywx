// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem';
import './assets/css/base.css';
import 'mint-ui/lib/style.min.css';
import MintUI from 'mint-ui'
import vueg from 'vueg';
import 'vueg/css/transition-min.css';


Vue.use(MintUI)
console.log(MintUI)
Vue.config.productionTip = false;
Vue.use(vueg, router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
