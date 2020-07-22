import Vue from 'vue'
import App from './App.vue'
import HeaderHome from './LandingPage/HeaderHome.vue'
import GettingStarted from './LandingPage/GettingStarted.vue'
import Customization from './LandingPage/Customization.vue'

Vue.component('QuickThinkHead', HeaderHome)
Vue.component('Instructions', GettingStarted)
Vue.component('Customize', Customization)





new Vue({
  el: '#app',
  render: h => h(App)
})

