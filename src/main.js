import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$appName = 'Felipe Muner CRUD'
Vue.prototype.$API = 'http://localhost:3000'
Vue.prototype.$http = axios
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
