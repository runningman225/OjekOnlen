<template>
    <v-container fluid>
        <v-layout>
        <div class="form">
            <h1>Join Page</h1>
            <br>
            <label for="name">Name</label>
                <input  type="text"
                        id="name"
                        v-model="user.name"
                        placeholder="Name"
                        class="form-control"/>
                        <br>
                <label for="email">E-mail</label>
                <input  type="email"
                        id="email"
                        v-model="user.email"
                        placeholder="E-mail"
                        class="form-control"/>
                        <br>
            <label for="password">Password</label>
                <input  type="password"
                        id="password"
                        v-model="user.password"
                        placeholder="Password"
                        class="form-control"/>
                        <br>
            <label for="contactNumber">contactNumber</label>
                <input  type="text"
                        id="contactNumber"
                        v-model="user.contactNumber"
                        placeholder="Contact number"
                        class="form-control"/>
                        <br>
            <label for="address">Address</label>
                <input  type="text"
                        id="address"
                        v-model="user.address"
                        placeholder="address"
                        class="form-control"/>
                        <br>
            <label for="address">Top up Balance</label>
                <input  type="number"
                        id="balance"
                        min="10000" 
                        maxlength="15"
                        v-model="user.balance"
                        placeholder="Balance min. 10.000"
                        class="form-control"/>
                        <br>
                <input  type="radio" 
                        id="zero" 
                        value="0" 
                        v-model="picked" 
                        @click="showStnkInput">
                <label for="one">Member</label>
                <br>
                <input  type="radio" 
                        id="one" 
                        value="1" 
                        v-model="picked"
                        @click="showStnkInput">
                <label for="two">Driver</label>
                <br>
                <!-- <span>Picked: {{ picked }}</span> -->
                <!-- <br> -->
                <div v-if="this.type==1">
                    <!-- <label for="stnk">STNK</label> -->
                    <input type="text"
                            id="stnk"
                            v-model="stnk"
                            placeholder="STNK"
                            class="form-control"/>
                </div>
                <br>
                <v-btn color="green" class="btn white--text text-xs-center" @click="saveUser">JOIN</v-btn>
             </div>
        </v-layout>
    </v-container>
</template>

<script>

import http from '../http-common'

export default {
    name: 'Join',
    data: function(){
        return {
            user : {
                name:'',
                email:'',
                password:'',
                contactNumber:'',            
                address:'',
                balance:0
            },
            type:'',
            stnk:'',
            picked:0
        }
    },
    methods:{
        showStnkInput: function(){
            this.type = event.target.value;
        },
        saveUser() {
            var _data = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                contactNumber: this.user.contactNumber,
                address: this.user.address,
                balance: this.user.balance,
            };
            if( this.picked==1) {
                _data.stnk=this.stnk;
                http
                    .post("/drivers", _data)
                    .then(response => {
                        console.log(response);
                        alert(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                    return
            }
             http
                .post("/members", _data)
                .then(response => {
                    console.log(response);
                    alert(response.data);
                })
                .catch(e => {
                    console.log(e);
                });                
       },
            
    },
    watch:{
        type:function(newValue){
            // this.type = newValue;
            console.log(this.type);
        }
    }
   
};
</script>

<style scoped>

.form {
    width: 480px;
    margin: 0 auto;
}
.form-control{
    border: 1px solid rgba(0, 0, 0, 0.4);
    width: 100%;
    padding: 8px 16px;
}
h1 {
    color: #4caf50;
}
.btn{
    width: 100%;
    margin: 0 auto;
}
</style>