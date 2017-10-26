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
<style>
.myContainer {
  padding-left: 64px;
}
.myContainer {
  padding-left: 64px;
}

html, body, #app, .el-container, #app > div {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  z-index: 2;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  padding: 65px 20px 20px;
  z-index: 1;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  margin-bottom: 0px;
  overflow: inherit;
}
body > .el-container {
  margin-bottom: 40px;
  min-height: 100%;
  height: 100%;
}
</style>
