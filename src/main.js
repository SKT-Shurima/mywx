// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem';
import './assets/css/base.css';
import 'mint-ui/lib/style.min.css';
import './assets/css/ui.scss';
import './assets/font/iconfont.css';
import MintUI from 'mint-ui'
import vueg from 'vueg';
import 'vueg/css/transition-min.css';
import 'vue-fullpage/vue-fullpage.css';
import VueFullpage from 'vue-fullpage';
import 'animate.css';
Vue.use(VueFullpage)
Vue.use(MintUI)
Vue.config.productionTip = false;
Vue.use(vueg, router);

Vue.filter('date',time=> {
	time-=0;
    var newDate = new Date(time);
    let {y,m,d}={y:newDate.getFullYear(),m:newDate.getMonth()+1,d:newDate.getDate()};
    m = trans(m);
    d = trans(d);
    return y +'-' + m + "-" + d ;
});
function trans (val){
    if (val < 10) {
      val = "0" + val ;
    }
    return val ;
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
