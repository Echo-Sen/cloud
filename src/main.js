import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
// 引入 jquery
// import jquery from 'jquery'
// Vue.prototype.jquery = $

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
