<style>
.left-30 {
  left: 30%;
  max-width: 70%;
  padding-right: 10px;
}
header {
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 1;
  line-height: 55px;

}
</style>
<template>
  <div>
    <header>
      <el-row class="left-30">
        <el-col :span="6">
          <a href="/">Home</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </el-col>
        <el-col :span="6">
          <a href="/">Home</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </el-col>
        <el-col :span="6">
          <a href="/">Home</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </el-col>
        <el-col :span="6">
          <a href="/">Home</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 3</a>
        </el-col>
      </el-row>
    </header>
  </div>
</template>
