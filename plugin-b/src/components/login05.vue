<style>
body {
   background-color: #E9ECEE;
}

</style>

<script>
import meuAside from './header/aside.vue'
import meuHeader from './header/header.vue'
import meuBody from './body/body.vue'
import meuBody0 from './body/body0.vue'
import meuTabs from './body/tabs.vue'
import meucreat from './body/creat.vue'
import meushow from './body/show.vue'


 export default {
   data() {
     return {

     }
   },
   components:{
     meuAside,
     meuHeader,
     meuBody,
     meuBody0,
     meuTabs,
     meucreat,
     meushow
   }
 }



</script>

<template>
  <div>

    <meuAside/>

    <meuHeader/>

    <!--<meuBody />-->

    <!--<meuBody0 />-->

    <!--<meuTabs />-->

    <!--<meucreat />-->

    <meushow />

  </div>
</template>
