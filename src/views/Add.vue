<template>
  <div class="home container">
    <h1>Welcome {{ name }} to  Add Restaurant page</h1>
    <form class="row g-4 form">
      <input class="col-12 p-2" type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
      <input class="col-12 p-2"  type="text" name="address" placeholder="Enter address" v-model="restaurant.address">
      <input class="col-12 p-2"  type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
      <button type="button" @click="add" class="col-12 btn btn-primary" >Add New Restaurant</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Add',
  components: { },
    data(){
      return{
        name:'',
          restaurant:{
          name:'',
          contact:'',
          address:''
        }
      }
    },
  methods:{
  async  add(){
      console.log(this.restaurant);
      const result =await axios.post(' https://mnhp-resto-app.netlify.app/restaurant',{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact
      })
      console.log(result);
      if(result.status == 201){
        this.$router.push({name:'home'})
      }
    }
  },

  mounted(){
    let user = localStorage.getItem('user-info');
    if(!user){
      this.$router.push({name:'login'})
    }
    this.name = JSON.parse(user).name

  }
 
}
</script>
