<template>
  <nav class="border-bottom navbar position-fixed fixed-top fixed-left justify-content-between bg-info text-light pad-x py-2">
    <div><strong style="font-family: 'Oswald', sans-serif;">KUBID PH</strong> <i class="fas fa-viruses"></i></div>
    <div>
      <button @click="openMenu" class="btn btn-outline-light btn-sm"><i class="fas fa-bars"></i></button>
    </div>
  </nav>
</template>

<script>
export default {
    name:'header',
    methods:{
      openMenu(){
        this.$store.state.menuGate ='menuOn'
      }
    }
}
</script>

<style scope>

</style>