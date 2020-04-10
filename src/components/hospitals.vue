<template>
 <div style="padding-bottom:40%; border">
    
    <h3 class="bg-info text-light p-1 text-center mar-x text-info" style="margin-bottom:4%; text-shadow: rgba(0,0,0,0.1) 0.1em 0.1em 0.2em;">PH HOSPITALS <i class="fas fa-search"></i></h3> 
    <form @submit.prevent="findHospitals" class="mar-x">
        <input v-on:keyup="initHosipital" v-model="findTxt" type='text' class="form-control border-info text-info" placeholder="Find Hospitals"> 
    </form>
    
    
    <div class="text-center">
        
        <small class="badge badge-info">Total: <span class="badge badge-light float-right ml-2" style="font-size:10px;">{{this.$store.state.hospitals.length}}</span></small>
        
    </div>
    
    
    <div class="border-bottom row pad-x text-info my-1 bg-light" style="width:105vw;" v-for="hos in hospitals" :key="hos">
        <div class="col-8 p-2 ">
            <strong>{{hos.facility}}</strong> <br>
            <small class="badge badge-info"><span class="text-light">Region</span>: {{hos.region}}</small>
            <p class=" mt-4"><small><a :href="'https://www.google.com/search?q='+hos.facility+' covid&rlz=1C1LOQA_enPH777PH777&oq='+hos.facility+' covid&aqs=chrome.0.69i59j69i61j0l4.7389j0j9&sourceid=chrome&ie=UTF-8'" target="_blank" class="text-info">Learn more <i class="fas fa-angle-double-right"></i></a></small></p>
        </div>

        <div class="col  p-2 text-info ">
            <div class="rounded bg-white border p-1 text-center mb-1">
                <span style='font-weight:999; font-size:20px;' class="badge badge-info text-white" >{{hos.confirmed_cases}}</span><br>
                <small>Confirmed</small>
            </div>

            <div class="rounded bg-white border p-1 text-center">
                <span style='font-weight:999; font-size:20px;' class="badge badge-info text-white" >{{hos.puis}}</span><br>
                <small>Piu's</small>
            </div>
        </div>
    </div>

    <p class="text-center my-4">
        <button @click="addLoadMore" class="btn btn-info btn-sm">Load more..</button>
    </p>

    

    

    
 </div> 
</template>

<script>
import axios from 'axios'

export default {
    name:'Hospitals',
    data(){
        return {
            countHospitalLoad:10,
            hospitals:[],
            findTxt:''
            
        }
    },
    created(){
        this.$store.state.footerMenu = {
            cases:'text-light',
            hospitals:'text-info bg-light rounded',
            ofw:'text-light',
            cities:'text-light'
        }

        this.hospitals = this.$store.state.hospitals.slice(0, this.countHospitalLoad)
    },
    async mounted(){
        this.initHospitaldata()
    },

    methods:{
        async initHospitaldata(){
            axios.get('https://coronavirus-ph-api.herokuapp.com/facilities')
            .then(res => {
                //console.log(res.data)
                this.$store.state.hospitals = res.data
                this.hospitals = this.$store.state.hospitals.slice(0, this.countHospitalLoad)
            })
        },

        async findHospitals(){
            let searchedcity = []
            if(this.findTxt != ""){
                
                this.$store.state.hospitals.forEach(hos => {
                    if(hos.facility.toLowerCase().includes(this.findTxt))
                        searchedcity.push(hos)
                })

                this.hospitals = await searchedcity
                
                
                this.$store.commit('alertSearch', {msg:'Search result: ', data:this.hospitals.length})
                
            }
        },

        
        async initHosipital(){
            if(this.findTxt == "")
                this.initHospitaldata()
        },

        addLoadMore(){
            this.countHospitalLoad += 10
            this.hospitals = this.$store.state.hospitals.slice(0, this.countHospitalLoad)
            this.$store.commit('alertSearch', {msg:'Loaded record: ', data:this.countHospitalLoad})
        }
    }
}
</script>

<style scope>
    
</style>