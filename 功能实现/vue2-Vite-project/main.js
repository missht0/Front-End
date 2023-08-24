import Vue from "vue"
import App from "./src/App.vue"
import "tailwindcss/tailwind.css"
import 'element-ui/lib/theme-chalk/index.css'
import router from "./src/router"
import "./src/utils/ElementUI.js"

Vue.config.productionTip = false//阻止启动生产消息



new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

