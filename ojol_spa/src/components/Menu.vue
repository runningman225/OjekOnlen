<template>
    <v-container>
        <v-layout>
            <!-- <v-flex md-1></v-flex> -->
            <v-flex md-4 class="addMarginAndBorder">
                <h2>Sign in</h2>
                <v-text-field ref="em" type="email" placeholder="E-mail"  required v-model="user.email" name="email"/>
                <!-- <br/> -->
                <v-text-field type="password" placeholder="Password" required v-model="user.password" name="password"/>  
                <v-btn class="btn-full"  @click="validate" color=" success" >SignIn</v-btn>
            </v-flex>
            <!-- <v-flex md-1></v-flex> -->
             <v-flex md-4 class="addMarginAndBorder">
                <h2>Sign in</h2>
                <v-text-field ref="em" type="email" placeholder="E-mail" required v-model="user.email" name="email"/>
                <!-- <br/> -->
                <v-text-field type="password" placeholder="Password"  required v-model="user.password" name="password"/>  
                <v-btn class="btn-full"  @click="validate" color=" success" >SignIn</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

import http from '../http-common';
export default {
    name: 'Menu',
    data: function(){
        return{
            user: {
                email:'',
                password:'',
            }
        }
    },
    props:{
        show:{
            type:Boolean
        }
    },
    methods:{
        setAuthenticated: function(bool){
           this.$emit('isAuthenticated',bool)
        //    console.log('authenticated : '+ bool);
       },
        validate: function(){
            var _data={
                email : this.user.email,
                password : this.user.password
            }
            http
                .post("/sign-in", _data)
                .then(response => {
                    if(response.status==200){
                        console.log(JSON.stringify(response.data));
                        response.data.stnk === undefined ? console.log("I'm a member"):console.log("I'm a driver"); 
                        const USER = {
                            email: response.data.email,
                            balance: response.data.balance,
                            stnk: response.data.stnk,
                        }
                        this.$store.dispatch('setUser', USER)
                        this.setAuthenticated(true);
                        this.$emit('close',false);
                        console.log(this.$store.getters.user);

                    }
                })
                .catch(e => {
                    console.log(e);
                });
                
        }
    }

};
</script>

<style scoped>
    h2{
        text-align: center;
        color: green;
    }
    .btn-full{
        margin: 0;
        width:100%;
    }
    .addMarginAndBorder{
        margin:10px;
        border: 1px solid rgba(0,0,0,0.3);
        /* border-radius: 20px; */
        padding:10px;
    }
    
</style>