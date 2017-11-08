<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
<template>
  <el-container>
    <slot name="aside"></slot>
    <el-container class="myContainer">
      <slot name="header"></slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
      </el-container>
    </el-container>
</template>
