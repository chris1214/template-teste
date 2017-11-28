<script>
export default{
    props: ["title", "card", "padding" ],
    data(){
        return{

        }
    },
    computed: {
    },
    components:{
    }
}

</script>
<template>
  <myContainer :card="card" :padding="padding">
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
<style scoped>
  .padding-11 {
    padding: 11px;
  }
</style>
