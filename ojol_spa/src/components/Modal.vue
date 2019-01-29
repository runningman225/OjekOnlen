
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
                <h3>Sign in</h3>
                <a href="#" @click="$emit('close')">X</a>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <!-- <label for="email">Email</label> -->
              <input  v-model="pickUpLoc"
                      class="form-control"
                      type = "text"
                      placeholder="Enter Pick up location"/>
                      <br>
              <!-- <label for="password">Password</label> -->
              <input  v-model="dropOffLoc"
                      type="text" 
                      class="form-control "
                      placeholder="Enter Drop off location"/>

            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button">
                Book
              </button>             
              <!-- <button class="modal-close-button" @click="$emit('close')">
                Close
              </button> -->
              
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition> 
</template>

<script>
  export default {
    name: 'Modal',
    data: function(){
      return {
        showModal:false,
        }
    },
    props:{
      pickUpLoc:{type: String},
      dropOffLoc:{type: String}
    }
  };
</script>

<style>


.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  height: 230px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
  color:white;
  background-color: #42b983;
  padding: 8px 16px;
}
a {
  float:right;
  color:green;
  text-decoration: none;
  margin-top: 0;
  padding-bottom: px;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
