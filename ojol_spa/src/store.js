import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import Signin from './components/Signin.vue'
import { isNullOrUndefined } from 'util';

Vue.use(Vuex)
  
export default new Vuex.Store({
  state: {
    user :{
      email:'',
      balance:0,
      stnk:''
    }
  },
  mutations: {
    SET_USER (state, _user) {
      state.user.email = _user.email;
      state.user.balance = _user.balance;
      state.user.stnk = _user.stnk;
      localStorage.setItem('user',JSON.stringify(state.user))
      },
    LOAD_USER (state){
      var _user=JSON.parse(localStorage.getItem('user'));
      if( _user === null || _user === undefined){
          _user = {
          email: '',
          balance: 0,
          stnk: ''
          };
      }         
      state.user.email= _user.email;
      state.user.balance= _user.balance;
      state.user.stnk= _user.stnk;
    }
  },
  actions:{
    setUser: function(context,_user){
      context.commit("SET_USER",_user)
    },
    loadUser: function(context){
      context.commit("LOAD_USER")
    }
  },
  getters: {
    user: state => state.user,
    email: state => state.user.email,

  },
})
