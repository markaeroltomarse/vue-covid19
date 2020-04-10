import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

import AppHome from '../components/home.vue'
import Hospitals from '../components/hospitals.vue'
import AppOfw from '../components/AppOfw.vue'
import Checkpoint from '../components/checkpoint.vue'
import Cities from '../components/cities.vue'

const routes = [
    {path:'/', name:'home', component:AppHome},
    {path:'/hospitals', name:'hospitals', component:Hospitals},
    {path:'/ofw', name:'ofw', component:AppOfw},
    {path:'/metro-manila-checkpoints', name:'checkpoint', component:Checkpoint},
    {path:'/cities', name:'Cities', component:Cities}
]

const router = new VueRouter({
    mode:'history',
    routes:routes
    
})

export default router