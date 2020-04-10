<template>
  <div  v-bind:class="this.$store.state.casesComponent.searchModal+' bg-info  '" style="padding-bottom:40%;">
      
      

      <form @submit.prevent="searchCasesSubmit" class="mar-x">
          <i @click="closeSearchCases " class="fas fa-long-arrow-alt-left text-light" style="font-size:30px;"></i>
          <input v-model="searchTxt" type="text" class="form-control rounded bg-light">
      </form>

      <p class="text-center text-light my-1" v-if="cases.length > 0"><small>Result: <span class="badge badge-light">{{resultSearch}}</span></small></p>
      
      
      <caseResult class="text-light" v-bind:cases="casesSearched"/>
      
      <p class="text-center" v-if="cases.length > 0">
          
          <button @click="loadMoreSearch" class="btn btn-light btn-sm">Load more..</button>
      </p>
  </div> 
</template>

<script>

import caseResult from './caseResult'

export default {
    name:'searchModal ',
    components:{
        caseResult
    },
    data(){
        return {
            searchTxt:'',
            cases:[],
            casesSearched:[],
            resultSearch:0,
            loadMoreCount:10
        }
    },
   
    async created(){
        this.cases = []
    },

    methods:{
        
        async searchCasesSubmit(){
            
            this.cases = this.$store.state.cases.slice()
            
            this.cases = this.cases.filter(kaso => {
                 return kaso.hospital_admitted_to.toLowerCase().includes(this.searchTxt.toLowerCase()) || kaso.resident_of.toLowerCase().includes(this.searchTxt.toLowerCase()) || kaso.nationality.toLowerCase().includes(this.searchTxt.toLowerCase())
            })
            this.casesSearched = this.cases.slice()
            this.casesSearched = this.casesSearched.slice(0, this.loadMoreCount)

            this.resultSearch = this.cases.length
            this.searchTxt = ''
            

            this.$store.commit('alertSearch', {msg:'Cases result: ', data:this.resultSearch})
            
        },

        closeSearchCases(){
            this.$store.state.casesComponent.searchModal = 'modalSearchOff'
            this.cases = []
        },

        loadMoreSearch(){
            this.loadMoreCount += 20
            this.casesSearched = this.cases.slice()
            this.casesSearched = this.casesSearched.slice(0, this.loadMoreCount)
            this.$store.commit('alertSearch', {msg:'Loaded results: ', data:this.casesSearched.length})
            //console.log(this.casesSearched)
        }
        
    }
}
</script>

<style scope>
    .modalSearchOn{
        position:fixed;
        width:100vw;
        height:100vh;
        top:7.5%;
        left:0;
        background-color:rgba(0,0,0,0.5);
        transition:0.2s;
        overflow-y:scroll;
        z-index:20;
    }

    .modalSearchOff{
        position:fixed;
        width:100vw;
        height:100vh;
        top:100%;
        left:0;
        background-color:rgba(0,0,0,0.5);
        transition:0.2s;
        z-index:20;
        overflow-y:scroll;
    }
</style>