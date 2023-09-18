import Vue from 'vue'
import App from './App.vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
import router from './router/router'
import { Divider } from 'element-ui'
Vue.component(Divider.name,Divider) 
new Vue({
  el: '#app',
  render: h => h(App),
  data() {
    return { value: '' }
  },
  router
}).$mount('#app')

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(mavonEditor)


