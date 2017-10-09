

<script>
import meuBody from '../components/body.vue'
import meuAside from '../components/aside.vue'
import meuHeader from '../components/header.vue'
import bodyList from './body/bodyList.vue'
import meuTabs from './body/tabs.vue'
import meucreat from './body/creat.vue'
import meushow from './body/show.vue'
import meudialog from './body/dialog.vue'


 export default {
   data() {
     return {

     }
   },
   components:{
     meuBody,
     meuAside,
     meuHeader,
     bodyList,
     meuTabs,
     meucreat,
     meushow,
     meudialog
   }
 }
</script>

<template>
  <div>

    <meuAside
    />

    <meuHeader/>

    <meuBody>

      <h2 slot="title">Usúario</h2>

      <!--<bodyList />-->

      <!--<meuTabs />-->

      <!--<meucreat/>-->

      <!--<meushow />-->

      <!--<meudialog />-->

    </meuBody>
  </div>
</template>
