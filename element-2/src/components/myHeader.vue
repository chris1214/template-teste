<script>
    export default{
      props: ["linkRight1", "linkRight2", "linkRight3", "linkLeft1", "linkLeft2", "linkLeft3"],
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
    <el-header>



      <el-row>
        <slot name="menu1024"></slot>

      </el-row>

      <el-row>
        <slot name="menu1440"></slot>
      </el-row>

      <el-row>
        <slot name="menu375"></slot>
      </el-row>


    </el-header>
  </div>
</template>
<style>
  @media (min-width: 349px){
  .display-2 {
    display: none !important;
  }.display-1 {
    display: none !important;
  }
  @media (min-width: 800px){
    .display-3 {
      display: block !important;
    }
  }
}
@media (min-width: 800px){
  .display-3 {
    display: none !important;
  }
  .display-1 {
      display: block !important;
    }
  @media (min-width: 1065px){
    .display-1 {
      display: block !important;
    }
  }
}
@media (min-width: 1065px){
  .display-2 {
    display: block !important;
  }
  @media (min-width: 349px){
    .display-1 {
      display: none !important;
    }
  }
}

.el-header > .el-menu{
  background-color: #fff;
}
.el-header {
  line-height: 55px;
  background-color: #fff;
  color: #333;
  position: fixed;
  top: 0px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  z-index: 5;
  padding: 0 83px 0 150px;
}
.text-align-end {
  text-align: end;
}
</style>
