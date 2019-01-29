import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store';

Vue.use(Router)
store.dispatch('loadUser');
function checkAuth(to,from,next){
  if(store.getters.user.email!==''){
    next();
  }
  else next('/')
}
function checkUserType(to,from,next){
  console.log(store.getters.user.stnk);
  if(store.getters.user.stnk==''){
    next();
  }
  else next('/')
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('./views/Menu.vue')
    },
    {
      path: '/join',
      name: 'join',
      beforeEnter : checkAuth,   
      component: () => import('./views/Join.vue'),
      
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/booking',
      name: 'booking',
      beforeEnter: checkUserType,
      component: Home
    },
  ],
  
  

})
