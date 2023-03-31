<template>
  <img class="logo" src="../assets/images.png" alt="">
  <div class="container">
      <h1>Sign Up</h1>
     <div class="d-flex flex-column form">
          <input class="p-2 m-2" type="text" v-model="name" placeholder="Enter Name">
          <input class="p-2 m-2" type="text" v-model="email"  placeholder="Enter Email">
          <input  class="p-2 m-2" type="password" v-model="password"  placeholder="Enter Password">
          <button @click="SignUp" class="p-2 m-2 btn btn-primary" >Sign Up </button>
     </div>
     <router-link  :to="{name:'login'}"> Already have an account ? Login</router-link>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name:'SignUp',
  data(){
      return{
          name:'',
          email:'',
          password:''
      }
  },
  methods:{
     async SignUp(){
          let result = await axios.post(' http://localhost:3000/users',{
              name:this.name,
              email:this.email,
              password:this.password
          }) ;
          console.log(result);
          if(result.status==201){
              this.$router.push({name:'home'})
              localStorage.setItem("user-info",JSON.stringify(result.data))
          }
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

<style>
.logo{
  width: 200px;
}
</style>