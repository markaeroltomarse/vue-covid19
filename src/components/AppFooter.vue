<template>
  <footer class="position-fixed fixed-bottom fixed-left bg-info px-4">
      <div class="row my-2" id="carousel">
          <div @click="changRoute('home')" :class="'col  '+this.$store.state.footerMenu.cases ">
              <i v-bind:class="'fas fa-head-side-virus'"></i><br>
              <small>Cases</small>
          </div>
          <div @click="changRoute('hospitals')" :class="'col  '+this.$store.state.footerMenu.hospitals ">
              <i class="fas fa-hospital " ></i><br>
              <small>Hospitals </small>
          </div>
          <div @click="changRoute('ofw')" :class="'col  '+this.$store.state.footerMenu.ofw ">
              <i class="fab fa-avianex"></i><br>
              <small>OFW</small>
          </div>
          
          <div @click="changRoute('Cities')" :class="'col  '+this.$store.state.footerMenu.cities ">
              <i class="fas fa-map-marked-alt"></i><br>
              <small>Cities</small>
          </div>
      </div>

      
  </footer>
</template>

<script>
export default {
    name:'AppFooter',
    created(){
        
    },
    methods:{
        changRoute(route){
            console.log(route)
            this.$router.replace({name:route})
        }
    }
}


</script>

<style scope>
    
    footer > div > div {
        text-align: center;
        padding:2%;
        cursor:pointer;
    }

    footer > div > div > i{
        font-size:22px;
    }
</style>