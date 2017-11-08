<script>
    export default{
        props: ["align", "backgroundColor"],
        data(){
            return{
            }
        },
        computed: {
          _textAling: function() {
            return "text-align: " + this.align + ';'
          },
          _background: function() {
            return "background-color: " + this.backgroundColor + ';'
          }
        },
        components:{
        }
    }
</script>
<template>
  <div>
    <el-row class="text-align-end" :style="_textAling, _background">
      <el-col :span="24">
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .text-align-end {
    text-align: end;
  }
  .el-row {
    padding: 10px 10px 10px 10px;
    margin-top: 15px;
  }
</style>
