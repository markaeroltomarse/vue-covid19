<template>
  <div style="padding-bottom:40%;">
      <modalSearch />
      <div class="row mar-x mt-2 rounded">
          <div class="col  text-center p-2 bg-info text-light">
              <small><strong>{{confirmed.toLocaleString()}}</strong></small><br>
              <small class="badge badge-light text-info">Confirmed</small>
          </div>
          <div class="col  text-center p-2 bg-info text-light">
              <small><strong>{{recovered.toLocaleString()}}</strong></small><br>
              <small class="badge badge-light  text-info">Recovered</small>
          </div>
          <div class="col  text-center p-2 bg-info text-light">
              <small><strong>{{deaths.toLocaleString()}}</strong></small><br>
              <small class="text-danger badge badge-light">Deaths</small>
          </div>

          
      </div>
        
      <button @click="openSearch" style="width:80%;" class="my-3 btn btn-info btn-sm  mar-x text-left">
          Find hospitals, Region or Age
          <i class="fas fa-search float-right mt-1"></i>
      </button>


      <p class="text-center"><small class="badge badge-info ">CASES RESULT <span style="font-family:'Tahoma', sans-serif;" class="badge badge-light ml-1">{{result.toLocaleString()}}</span></small></p>
      

        
      <caseResult v-bind:cases="cases"/>

      <div class="text-center" v-if="loadSpinner">
        <div class="spinner-border text-info text-center my-5" role="status">
            <span class="sr-only">Loading...</span>
        </div>
      </div>

      <p class="text-center"><button @click="loadCases" class="btn btn-sm btn-info" v-bind:disabled="loadCasesBtn.isDisabled">{{loadCasesBtn.text}}</button></p>
  </div>
</template>

<script>
import axios from 'axios'
import modalSearch from './cases-component/searchModal'
import caseResult from './cases-component/caseResult'
export default {
    name:'AppHome',
    components:{
        modalSearch,
        caseResult
    },
    data(){
        return {
            cases:[],
            confirmed:0,
            recovered:0,
            deaths:0,
            result:0,
            
            checkCount:10,
            loadCasesBtn:{
                text:'Loading..',
                isDisabled:true
            },
            loadSpinner:true,

            searchStyle:'modalSeachOff '
        }
    },

    async mounted(){
        this.getApiCases()
        this.cases = await this.$store.state.cases.slice(0, this.checkCount)
        this.loadCasesBtn.text = 'Load more..'
        this.loadCasesBtn.isDisabled = false
        this.loadSpinner= false
        
    },

    created(){
        this.$store.state.footerMenu = {
            cases:'text-info bg-light rounded',
            hospitals:'text-light',
            ofw:'text-light',
            cities:'text-light'
        }

        this.$store.state.casesComponent.searchModal = 'modalSearchOff '


    },
    methods:{
        async loadCases(){
            //this.$store.commit('clearCasesInfo')
            this.checkCount += 10
            this.cases = await this.$store.state.cases.slice(0, this.checkCount)
            this.$store.commit('alertSearch', {msg:'Loaded record: ', data:this.checkCount})
        },

        async getApiCases(){
            axios.get('https://coronavirus-ph-api.herokuapp.com/cases?_limit='+this.checkCount)
            .then( res => {
                let casesRes = res
                this.$store.state.cases = casesRes.data
                casesRes.data.forEach( kaso => {
                    if(kaso.status == 'Died')
                        //this.$store.state.casesInfo.deaths += 1
                        this.deaths += 1

                    if(kaso.status == 'Recovered')
                        //this.$store.state.casesInfo.recovered += 1
                        this.recovered += 1

                    if(kaso.status == 'Admitted')
                        //this.$store.state.casesInfo.confirmed += 1
                        this.confirmed += 1
                })
                this.result = casesRes.data.length
                this.cases = casesRes.data.slice(0, this.checkCount)
            }).catch(err => console.log(err))
        },

        async openSearch(){
           this.$store.state.casesComponent.searchModal = 'modalSearchOn '
           
        }
        
    },

    filters:{
        
    }
}
</script>

<style scope>
    
</style>