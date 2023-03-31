<template>
    <img class="logo" src="../assets/images.png" alt="">
  <div class="container">
      <h1>Log In</h1>
     <div class="d-flex flex-column form">
          <input class="p-2 m-2" type="text" v-model="email"  placeholder="Enter Email">
          <input  class="p-2 m-2" type="password" v-model="password"  placeholder="Enter Password">
          <button @click="login" class="p-2 m-2 btn btn-primary" >Log In </button>
     </div>
     <router-link  :to="{name:'sign-up'}"> Sign Up</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async login(){
            let result =await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if(result.status==200 && result.data.length > 0){
                localStorage.setItem('user-info',JSON.stringify(result.data[0]))
                this.$router.push({name:'home'})
            }
            console.log(result)
        }
    },
    
    mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({name:'home'})
    }
  }

}

</script>