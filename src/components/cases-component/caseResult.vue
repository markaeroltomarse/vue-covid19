<template>
  <div>
    <div class="mar-x border my-2 row" v-for="kaso in cases" v-bind:key="kaso.case_no">
        <div class="col-8 r p-2">
            <small><strong>{{kaso.hospital_admitted_to}}</strong> - <span class="text-secondary">{{kaso.nationality}}</span> </small><br>
            <small>From: {{kaso.resident_of}}</small><br>
            <small class="text-info">{{kaso.date}}</small>
        </div>

        <div class="col p-2 text-center">
            <div class="bg-light rounded text-center p-2">
                <i class="fas fa-procedures text-info" style="font-size:35px;"></i>
                <!-- <i class="fas fa-user-injured" style="font-size:35px;"></i> -->
            </div>
            <small class="text-secondary">{{kaso.status}}</small><br>
            <small class="text-info">Case No.{{kaso.case_no}}</small>
        </div>
    </div>
  </div>
</template>

<script>


export default {
 name:'caseResult',
 props:['cases']
}
</script>

<style>

</style>