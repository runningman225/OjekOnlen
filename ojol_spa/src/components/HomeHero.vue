<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;" >
        <v-layout justify-center align-center column pa-5>
            <div class="display-3 font-weight-black green--text text-xs-center mb-3">Cepat - Murah - Aman</div>
            <div class="display-1 font-weight-bold green--text text-xs-center">Kemanapun, kapanpun dan dimanapun</div>
            <v-btn large class="mt-5 white darken-4" @click="showModal = true">
            <v-icon  color="green darken-3">BOOK NOW</v-icon>
            </v-btn>
        </v-layout>
        <Modal v-if="showModal" @close="showModal = false">   </Modal>

    </v-container>
</template>

<script>
import Modal from '@/components/Modal';

export default {
    name: 'HomeHero',
     components: {
        Modal
    },
    data: function(){
        return{
            showModal : false,
            user:{
                name : "",
            }
        }
    }
};
</script>

<style scoped>
.home-hero {
    background: url('http://kmtm.ft.ugm.ac.id/demo/wp-content/uploads/2017/11/as.jpg');
    background-size: cover;
}
.mt-5 {
    opacity:0.9;
}

</style>