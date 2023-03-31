<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><code>Resto App</code></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item  m-1 p-2">
          <router-link :to="{name:'home'}" class="router-link ">Home</router-link>
        </li>
        <li class="nav-item  m-1 p-2">
          <router-link :to="{name:'add-restaurant'}" class="router-link ">Add restaurant</router-link>
        </li>
        <li class="nav-item  m-1">
          <a @click="logout" class="nav-link" href="#">Log Out</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  <router-view/>
</template>

<script>
export default {
  methods:{
    logout(){
      localStorage.clear()
      alert(" Successfully logOut")
      this.$router.push({name:'login'})
    }
  },
  data(){
    return{
      restaurant:'',
      name:'',
      contact:'',
      address:''
    }
  }
}

</script>



 <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-item:hover{
  background-color: #2c3e50;
  color: white;
}

.nav-item{
  transition: all .2s;
  background-color: rgb(233, 232, 232);
}
nav a.router-link-exact-active {
  color: #42b983;
}
.router-link{
  text-decoration: none;
}
.form{
  max-width: 500px;
  margin: 0 auto;
}
nav{
  position: sticky;
  top: 0;
}

</style>
