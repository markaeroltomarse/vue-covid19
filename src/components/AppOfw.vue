<template>
 <div style="width:100vw; padding-bottom:40%;">
     <h4 class="text-info mar-x">Cases outside ph</h4>
     <p class="mar-x">
         <small class="text-secondary ">Getting confirmed cases of Filipino nationals outside the Philippines.</small>
     </p>

     <div class="pad-x w-100 bg-light border-bottom py-2 pb-4 mt-1" v-for="ofw in ofwcases" :key="ofw">
        <p class="text-center text-info"><strong style="text-shadow: rgba(0,0,0,0.1) 0.1em 0.1em 0.2em;">{{ofw.country_territory_place}}</strong></p>
         <div class="gridofw">
             <div class="badge badge-info p-2 rounded">
                 <div class="badge badge-light" style="font-size:20px;">
                     {{ofw.confirmed}}
                 </div><br>

                 <small>Confirmed</small>
             </div>

             <div class="badge badge-info p-2 rounded">
                 <div class="badge badge-light" style="font-size:20px;">
                     {{ofw.recovered}}
                 </div><br>

                 <small>Recovered</small>
             </div>

             <div class="badge badge-info p-2 rounded">
                 <div class="badge badge-light" style="font-size:20px;">
                     {{ofw.died}}
                 </div><br>

                 <small>Died</small>
             </div>
         </div>
     </div>
     
 </div> 
</template>

<script>
import axios from 'axios'
export default {
    name:'AppOfw',
    data(){
        return {
            ofwcases:[]
            
        }
    },
    created(){
        this.$store.state.footerMenu = {
            cases:'text-light',
            hospitals:'text-light',
            ofw:'text-info bg-light rounded',
            cities:'text-light'
        }
    },

    async mounted(){
        axios.get('https://coronavirus-ph-api.herokuapp.com/cases-outside-ph')
        .then(res => {
            //console.log(res.data)
            this.$store.state.outsideph = res.data
            this.ofwcases = this.$store.state.outsideph
        })
    }
}
</script>

<style scope>
    .gridofw{
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        grid-gap:1%;
    }
</style>