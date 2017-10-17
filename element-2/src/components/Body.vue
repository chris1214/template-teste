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
  <div>
    <el-container>

      <div slot="aside"></div>

      <el-container class="meuContainer">

        <el-header>
          <div slot="header"></div>
        </el-header>

        <el-main>
          <div slot="main"></div>
        </el-main>
        <el-footer slot="footer"></el-footer>
      </el-container>

    </el-container>

  </div>
</template>
<style>
</style>
