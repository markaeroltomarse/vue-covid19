<template>
 <div class="w-100" style="padding-bottom:40%;">
     <div class="row bg-light pad-x py-2 text-center">
         <div class="col  p-1 py-2 bg-info text-light">
             <div style="font-size:20px;" class="badge badge-light rounded p-1">
                {{confirmed.toLocaleString()}}
             </div><br>
             <small>Confirmed</small>
         </div>

         <div class="col py-2   bg-info text-light p-1">
             <div style="font-size:20px;" class="badge badge-light rounded p-1">
                {{recovered.toLocaleString()}}
             </div><br>
             <small>Recovered</small>
         </div>

         <div class="col py-2  bg-info text-light p-1">
             <div style="font-size:20px;" class="badge badge-light rounded p-1">
                {{deaths.toLocaleString()}}
             </div><br>
             <small>Died</small>
         </div>
     </div>

     <form @submit.prevent="findCity" class="mar-x">
         <input type="text" v-on:keyup="initCities"  v-model="findtxt" class="form-control border-info bg-light text-info" placeholder="Find city">
     </form>

     <p class="text-center"><small class="badge badge-info">Total city: <span class="badge badge-light">20</span></small></p>
     

     <div class="pad-x bg-light py-2  border-bottom text-info row" v-for="city in cities" :key="city">
         <div class="col-5 ">
             <strong>{{city.lgu}}</strong><br>
             <small class="badge badge-info">Region: <span class="badge badge-light">{{city.region}}</span></small>
         </div>

         <div class="col-8 row text-center text-light">
             <div class="col bg-info rounded p-1 ml-1">
                 <div class="badge badge-light text-info rounded">
                     {{city.cases}}
                 </div><br>
                 <small style="font-size:10px;">Cases</small>
             </div>
             <div class="col bg-info rounded p-1 ml-1">
                 <div class="badge badge-light text-info rounded">
                     {{city.recovered}}
                 </div><br>
                 <small style="font-size:10px;">Recovered</small>
             </div>
             <div class="col bg-info rounded p-1 ml-1">
                 <div class="badge badge-light text-info rounded">
                     {{city.deaths}}
                 </div><br>
                 <small style="font-size:10px;">Deaths</small>
             </div>
         </div>
     </div>
      
     <p class="text-center mt-5"><button class="btn btn-info btn-sm">Load more..</button></p>
    
 </div> 
</template>

<script>
import axios from 'axios'
export default {
    name:'Cities',
    data(){
        return {
            cities:[],
            findtxt:'',
            confirmed:0,
            recovered:0,
            deaths:0
        }
    },
    methods:{
        async findCity(){
            let searchedcity = []
            if(this.findtxt != ""){
                
                this.$store.state.cities.forEach(cit => {
                    if(cit.lgu.toLowerCase().includes(this.findtxt))
                        searchedcity.push(cit)
                })

                this.cities = await searchedcity
                this.$store.commit('alertSearch', {msg:'Founded matches: ', data:searchedcity.length})
            }
        },

        async initCities(){
            if(this.findtxt == "")
                this.initCitiesData()
        },

        async initCitiesData(){
            this.confirmed = 0
            this.recovered = 0
            this.deaths = 0
            axios.get('https://coronavirus-ph-api.herokuapp.com/lockdowns')
            .then(res => {
                // console.log(res.data)
                this.$store.state.cities = res.data
                this.cities = this.$store.state.cities

                res.data.forEach(c => {
                    this.confirmed += c.cases
                    this.recovered += c.recovered
                    this.deaths += c.deaths
                })
                
            })
        }
    },
    created(){
        this.$store.state.footerMenu = {
            cases:'text-light',
            hospitals:'text-light',
            ofw:'text-light',
            cities:'text-info bg-light rounded'
        }
    },


    async mounted(){
        this.initCitiesData()
    }
}
</script>

<style scope>

</style>