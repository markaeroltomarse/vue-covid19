<template>
  <div id="app">
    <div :class="this.$store.state.alertSearch.mode+' text-center bg-info text-light'">
        {{this.$store.state.alertSearch.msg.msg}} <span class='badge badge-light text-info'>{{this.$store.state.alertSearch.msg.data}}</span>
    </div>
    <menuApp style="z-index:50;"/>
    <Navbar style="z-index:20;"/>

    <router-view></router-view>
    <AppFooter style="z-index:20;"/>
  </div>
</template>

<script>
import Navbar from './components/header'
import AppFooter from './components/AppFooter'
import menuApp from './components/menu'



export default {
  name: 'App',
  components: {
    Navbar,
    AppFooter,
    menuApp
  },
  data(){
    return {
      
    }
  },
  
  async created(){

   
    
  }
}
</script>

<style>
#app{
  margin-top:17%;
}

nav,footer{
  
  width:100vw;
}
*{
  box-sizing:border-box;
  padding:0px;
  margin:0px;
}

body{
  font-family:'Nunito', sans-serif;
  overflow-x:hidden;
  width:100vw;
}



.mar-x{
  margin:0px 10%;
}

.pad-x{
  padding:0px 10%;
}


.alertSearchOn{
    position:fixed;
    top:0;
    left:0;
    margin:10% 20%;
    padding:2%;
    border-radius:5px;
    box-shadow:0px 5px 10px 5px rgba(0,0,0,0.2);
    z-index:100;
    width:65%;
    transition:0.5s;
}

.alertSearchOff{
    position:fixed;
    top:0;
    left:0;
    margin:-30% 20%;
    padding:2%;
    border-radius:5px;
    box-shadow:0px 5px 10px 5px rgba(0,0,0,0.05);
    z-index:100;
    width:65%;
    transition:0.5s;
}



</style>
