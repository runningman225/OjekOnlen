<template>
   <span>
        <v-navigation-drawer app v-model="drawer" class="green" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="green " dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title class="webName" to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-dialog v-model="signInForm" max-width="290px">
                <v-btn v-if="!this.authenticated" slot="activator" flat class="hidden-sm-and-down">SIGN IN</v-btn>
                <v-card>
                    <Signin @isAuthenticated=setAuthenticated 
                            ref="signIn1"
                            @close="signInForm=false"></Signin>
                </v-card>
            </v-dialog>
            <v-btn v-if="!this.authenticated" color="green lighten-1" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
            <v-btn v-if="this.authenticated" flat class="hidden-sm-and-down" to="/profile">{{email}}</v-btn>
            <v-btn v-if="this.authenticated" @click="signOut()" flat class="hidden-sm-and-down">SIGN OUT</v-btn>
        </v-toolbar>
        <!-- <Signin :show=isShown></Signin> -->
        </span>
</template>

<script>
import Signin from '@/components/Signin'


export default {
    name: 'AppNavigation',
    components:{
        Signin,
    },
    data: function() {
        return {
            appTitle: 'Ojek Online',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ],
            signInForm : false,
        };
    },
    props:{
        authenticated:{type:Boolean},
        email:{type:String}
    },
    methods:{
       setAuthenticated: function(bool){  
            this.$emit('isAuthenticated',bool);
       },
       signOut: function(){
            this.$store.dispatch('setUser', {name:'',balance:0,stnk:''})
            this.$emit('isAuthenticated',false);
       }
    },
    watch:{
        signInForm: function(val){
            this.$refs.signIn1.autoFocus();
        }
    }
};  

</script>

<style scoped>
.webName:hover {
    background-color:rgba(255,255,255,0.1);
    padding: 6px 12px;
}
    a {
        color: white;
        text-decoration: none;
    }
</style>