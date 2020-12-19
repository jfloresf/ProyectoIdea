import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Buefy)
Vue.use(VueAxios, axios)


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
