<template>
  <div class="home container">
    <h1>Welcome {{ name }} to  Update Restaurant page </h1>
    <form class="row g-4 form">
      <input class="col-12 p-2" type="text" name="name" placeholder="Enter name" v-model="restaurant.name">
      <input class="col-12 p-2"  type="text" name="address" placeholder="Enter address" v-model="restaurant.address">
      <input class="col-12 p-2"  type="text" name="contact" placeholder="Enter contact" v-model="restaurant.contact">
      <button type="button" @click="Update" class="col-12 btn btn-primary" >Update Restaurant</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios  from 'axios';

export default {
  props:['id'],
  name: 'Update',
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
  async  Update(){
    const result =await axios.put('https://mnhp-resto-app.netlify.app/restaurant/'+this.id,{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact
      })
      console.log(result);
      if(result.status == 200){
        this.$router.push({name:'home'})
      }
    console.log(this.restaurant);
    }
    
  },

 async mounted(){
    let user = localStorage.getItem('user-info');
    this.name = JSON.parse(user).name
    if(!user){
      this.$router.push({name:'sign-up'})
    }
    this.name = JSON.parse(user).name
    const result = await axios.get('https://mnhp-resto-app.netlify.app/restaurant/' + this.id)
    this.restaurant = result.data
  }
 
}
</script>
