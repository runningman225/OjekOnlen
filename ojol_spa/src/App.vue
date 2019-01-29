<template>
    <v-app>
        <app-navigation     @isAuthenticated=setAuthenticated 
                            :authenticated=authenticated
                            :email=currentUserEmail></app-navigation>
            <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        AppNavigation,
    },
    data: function(){
        return {
            authenticated: false,
            user:{
                name:'',
                balance:'',
                stnk:'',
            }
        }
    },
    methods:{
       setAuthenticated: function(bool){
           this.authenticated = bool;
           console.log('authenticated : '+ bool);
       },
       
    },
    computed:{
        //cek apakah store.js mengandung isi, jika iya maka user sblmnya blm login
        currentUserEmail: function(){
            this.$store.dispatch('loadUser');
            this.user=this.$store.getters.user;
            console.log('stnk : ' + this.user.stnk);
            if(this.user.email!=null || this.user.email!= undefined){
                this.setAuthenticated(true);
                return this.user.email;
                }
            }
        }
    }

</script>

<style>
</style>