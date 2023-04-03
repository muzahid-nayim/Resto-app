<template>
  <div class="container">
    <h1>Hello {{ name }} Welcome to  Homepage</h1>
          <table class="table border table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="item in restaurant" :key="item.id">
              <td scope="row">{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.contact }}</td>
              <td>{{ item.address }}</td>
              <td>
                <router-link :to="{name:'update',params:{id:item.id}}">Update</router-link>
                <button @click="deleteResto(item.id)" class="btn m-1 btn-danger" >Delete</button>
              </td>
            </tr>
          </tbody>
          </table>
  </div>
 
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: 'HomeView',
  components: { },
  methods:{
  async  deleteResto(id){
      console.log(id)
       await axios.delete(' https://mnhp-resto-app.netlify.app/restaurant/'+id)
      window.location.reload();
    }
  },

  data(){
    return{
      name:'',
      restaurant:[]
    }
  },

 async mounted(){
    let user = localStorage.getItem('user-info');
    
    if(!user){
      this.$router.push({name:'sign-up'})
    }
    this.name = JSON.parse(user).name
    let result  =await axios.get('https://mnhp-resto-app.netlify.app/restaurant')
    this.restaurant = result.data
    // console.log(result);
  }
 
}
</script>
