import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import AboutPage from './AboutPage.vue'
import HeaderHome from './LandingPage/HeaderHome.vue'
import GettingStarted from './LandingPage/GettingStarted.vue'
import Customization from './LandingPage/Customization.vue'

Vue.use(VueRouter)

let routes = [
  {path: '/about', component: AboutPage},
  {path: '/', component: Home}
]

let router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('QuickThinkHead', HeaderHome)
Vue.component('Instructions', GettingStarted)
Vue.component('Customize', Customization)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

