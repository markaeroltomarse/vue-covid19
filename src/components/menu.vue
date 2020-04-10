<template>
 <div :class="this.$store.state.menuGate+' text-light bg-info'">
     <i @click="closeMenu" class="fas fa-times float-right mar-x my-2" style="font-size:35px;"></i>
    <div class=" " style="height:70%;">
        
        <!-- <h3 class="text-center my-2">
            <strong style="font-family: 'Oswald', sans-serif;">KUBID PH</strong> <i class="fas fa-viruses"></i>
        </h3> -->
        
        <div class="p-2 mt-5">

            <small class='text-light mar-x'>API Link</small>
            <div class="py-3 px-3 bg-light rounded text-info mar-x mb-3">
                <strong>https://github.com/sorxrob/coronavirus-ph-api</strong>
            </div>
            <div class="">
                <button class="btn btn-light rounded btn-sm mar-x text-info " >
                    <i class="fas fa-chart-line" style="font-size:20px;"></i>
                    Statistic 
                    <span class="badge badge-info ml-4" style="font-size:15px;">soon</span>
                </button>

               
            </div>
        </div>
    </div>
    <div class="p-2 text-center" style="background-color:#121C3A; height:30%; ">
        <h4 class="badge badge-info ">Tools Used:</h4>
        <div class=" toolsicon">
            <div class="bg-light rounded" :style="{'background-image':'url('+require('../assets/logo.png')+')'}"></div>
            <div class="bg-light rounded" :style="{'background-image':'url('+require('../assets/bs.png')+')'}"></div>
            <div class="bg-light rounded" :style="{'background-image':'url('+require('../assets/axios.png')+')'}"></div>
            <div class="bg-light rounded" :style="{'background-image':'url('+require('../assets/github.png')+')'}"></div>

        </div>

        <div class="d-flex justify-content-center  mt-3">
            <a href="http://www.facebook.com/AEROL.TOMARSE" target="_blank" class="fab fa-facebook-f  text-primary" style="font-size:30px;"></a>
        </div>
        
    </div>
    
 </div> 
</template>

<script>
export default {
    name:'menuApp',
    methods:{
        closeMenu(){
            this.$store.state.menuGate = 'menuOff'
        }
    }
}
</script>

<style>
.menuOn{
    overflow-y:scroll;
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    right:0;
    background-color:rgba(0,0,0,0.5);
    transition:0.2s;
}

.menuOff{
    overflow-y:scroll;
    width:100vw;
    height:100vh;
    position: fixed;
    top:0;
    right:-110%;
    background-color:rgba(0,0,0,0.5);
    transition:0.2s;
}

.toolsicon{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin:5% 13%;
    grid-gap:1%;
}

.toolsicon > div{
    
    background-size:50% 90%;
    background-repeat:no-repeat;
    background-position: center;
    margin-bottom: 5%;
    padding:35% 20%;
}
</style>