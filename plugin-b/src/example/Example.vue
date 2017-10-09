<template>
  <div>
    <div class="container">
      <h2>Formulario</h2>
      <el-col :span="6">
        <RenderFildText/>
      </el-col>
    </div>
  </div>
</template>
<script>
    import {RenderFildText} from 'plugin-a'
    export default{
        data(){
            return{
            }
        },
        components:{
          RenderFildText
        }
    }

</script>
