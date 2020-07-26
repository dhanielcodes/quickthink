import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//IMPORT AXIOS LIBRARY(INSTALLED GLOABLLY)
import $axios from 'axios'


//NAV COMPONENT (LEAVE IT ALONE DON'T TOUCH THIS)
import Nav from './Nav.vue'
Vue.component('Nav', Nav)

//PRELOADER COMPONENT (LEAVE IT ALONE DON'T TOUCH THIS)
import preloader from './preloader.vue'
Vue.component('preLoad', preloader)


//NEWSLETTER COMPONENT (LEAVE IT ALONE DON'T TOUCH THIS)
import NewsLetter from './NewsLetter.vue'
Vue.component('Newsletter', NewsLetter)

//FOOTER COMPONENT (LEAVE IT ALONE DON'T TOUCH THIS)
import Footer from './Footer.vue'
Vue.component('Footer', Footer)

//ALL COMPONENTS MAKING THE PAGE 

//IMPORTED HOME COMPONENTS
import HomePage from './MainComponents/HomePage.vue'
//--SECTIONS HOME
import HeaderHome from './homePage/HeaderHome.vue'
import GettingStarted from './homePage/GettingStarted.vue'
import Download from './homePage/Download.vue'
Vue.component('QuickThinkHead', HeaderHome)
Vue.component('Instructions', GettingStarted)
Vue.component('Download', Download)




//IMPORTED ABOUT COMPONENTS
import AboutPage from './MainComponents/AboutPage.vue'
//--SECTIONS ABOUT

//IMPORTED LEADER-BOARD COMPONENTS
import LeaderBoardPage from './MainComponents/LeaderBoardPage.vue'


//IMPORTED CATEGORIES COMPONENTS
import CategoriesPage from './MainComponents/CategoriesPage.vue'
//--SECTIONS CATEGORIES

//IMPORTED LOGIN 
import LoginPage from './MainComponents/LoginPage.vue'

//IMPORTED SIGNUP
import SignupPage from './MainComponents/SignupPage.vue'

//ROUTER FOR THE SINGLE PAGE SITE
Vue.use(VueRouter)

let routes = [
  {path: '/login', component: LoginPage},
  {path: '/signup', component: SignupPage},
  {path: '/about', component: AboutPage},
  {path: '/leaderBoard', component: LeaderBoardPage},
  {path: '/categories', component: CategoriesPage},
  {path: '/', component: HomePage}
]

let router = new VueRouter({
  routes,
  mode: 'history'
})




new Vue({
  el: '#app',
  router,
  render: h => h(App)
})




