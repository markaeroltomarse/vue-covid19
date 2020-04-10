import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        cases:[],
        hospital:[],
        ofw:[],
        checkpoint:[],
        casesInfo:{
            confirmed:0,
            recovered:0,
            deaths:0,
            result:0,
            checkCount:10,
            loadCasesBtn:'Load more..',
        },
        casesComponent:{
            searchModal:'modalSearchOff'
        },


        footerMenu:{
            cases:'',
            hospitals:'',
            ofw:'',
            cities:''
        },

        //HOSPITAL DATA

        hospitals:[],


        //OFW DATA

        outsideph:[],


        //CITIES
        cities:[],

        //MENU
        menuGate:'menuOff',

        //ALERT

        alertSearch:{
            mode:'alertSearchOff',
            msg:{
                msg:'',
                data:0
            }
        }
        
    },
    getters:{
        getCount(state){
            return state.casesInfo.checkCount
        },
        casesLoadMoreBtn(state){
            return state.casesInfo.loadCasesBtn
        }

        
        
    },
    mutations:{
        alertSearch(state, {msg, data}){
            state.alertSearch.mode ='alertSearchOn'
            state.alertSearch.msg = {
                msg:msg,
                data:data
            }

            setTimeout(()=>{
                
                state.alertSearch.mode ='alertSearchOff'
            }, 3000)
        },

        clearCasesInfo(state){
            state.casesInfo = {
                confirmed:0,
                recovered:0,
                deaths:0,
                result:0,
                checkCount:10,
                loadCasesBtn:'Load more..'
                
            }
        }
    },
    actions:{
        
    }
})