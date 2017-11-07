<script>
import myContainer from './myContainer'
export default{
    props: ["title"],
    data(){
        return{
        }
    },
    components:{
      myContainer,
    }
}

</script>
<template>
  <myContainer :disableCard="false" :disablePadding="false">
    <el-row>
      <el-col :span="12">
        <h1>{{ title }}</h1>
      </el-col>
      <el-col :span="12" class="text-align-end padding-11">
        <slot></slot>
      </el-col>
    </el-row>
  </myContainer>
</template>
<style>
</style>
