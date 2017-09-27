<style>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
   width: 200px;
   min-height: 100%;
   height: 100%;
 }
 .aside > ul{
   height: 100%;
   min-height: 100%;
   max-height: 100%;
 }
.aside {
  z-index: 2004;
  position: fixed;
  min-height: 100%;
  height: 100%;
}
z-index-1 {
  z-index: 2;
}
.corpo {
  margin-left: 65px;
  background-color: #dcdbdb;
  padding-top: 45px;
}
.botao {
  z-index: 1;
  position: relative;
  padding-left: 20%;
}
.brand-icon {
    display: block;
    line-height: 55px;
    width: 55px;
    height: 55px;
    float: left;
    margin: 0;
}
.img .el-tooltip {
  padding: 0px !important;
}
img {
    vertical-align: middle;
}


.brand-text {
    display: block;
    font-size: 21px;
    font-weight: 600;
}
header {
  z-index: 2;
  position: fixed;
  width: 100%;
  border-bottom: solid 1px;
  box-shadow: 0px 4px #ff6600;
  background-color: white;
}
.conteudo {
  padding: 0px 0px 0px 10px;
}


</style>

<script>
 export default {
   data() {
     return {
       isCollapse: true,
       name: ''
     };
   },
   methods: {
     handleOpen(key, keyPath) {
       console.log(key, keyPath);
     },
     handleClose(key, keyPath) {
       console.log(key, keyPath);
     },
     close(){
      this.isCollapse = !this.isCollapse;
     },
     open(){
      this.isCollapse = !this.isCollapse;
     }
   }
 }



</script>

<template>
  <div>

    <!--
        <el-menu-item style="height: 145px;">
          <el-row>
            <el-col :span="24">
              <b-img rounded="circle" blank width="70" height="70" blank-color="#777" alt="img" class="m-1 class70" />
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24">
              <a href="#">Link 1</a>
              <a href="#" class="none">Link 2</a>
              <a href="#" class="none">Link 3</a>
              <a href="#" class="none">Link 4</a>
            </el-col>
          </el-row>
        </el-menu-item>
    -->

    <div class="aside">
      <el-menu default-active="2" class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <el-menu-item index="1" class="img">
          <img src="./logo.png" alt="Nifty Logo" class="brand-icon">
          <span class="brand-text" slot="title">Nifty</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">Navigator One</span>
          </template>
          <el-menu-item-group>
            <span slot="title">Group One</span>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="2-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <span slot="title">item four</span>
            <el-menu-item index="2-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title"><a href="/">Home</a></span>
        </el-menu-item>
      </el-menu>
    </div>
    <header>
      <el-row>

        <el-col :span="24" class="botao">
          <el-button @click="isCollapse = !isCollapse">|||</el-button>
        </el-col>
      </el-row>
    </header>

    <div class="corpo">

      <div class="conteudo">
        <el-row>
          <el-col :span="24">
            <h2>Um título</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias culpa delectus dicta doloribus
              eligendi
              esse est illum impedit incidunt iste iusto neque, nulla, odio quaerat recusandae reprehenderit soluta.
              Alias?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cumque excepturi itaque, minus
              nemo odit qui. Ab architecto, consequuntur fuga odio officia perspiciatis praesentium, quaerat rerum saepe
              sit
              totam!</p>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem deleniti error esse
              facere
              maiores minus neque optio porro quibusdam quidem, rerum saepe sequi, tempore tenetur totam veritatis
              voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias culpa delectus dicta doloribus
              eligendi
              esse est illum impedit incidunt iste iusto neque, nulla, odio quaerat recusandae reprehenderit soluta.
              Alias?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cumque excepturi itaque, minus
              nemo odit qui. Ab architecto, consequuntur fuga odio officia perspiciatis praesentium, quaerat rerum saepe
              sit
              totam!</p>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem deleniti error esse
              facere
              maiores minus neque optio porro quibusdam quidem, rerum saepe sequi, tempore tenetur totam veritatis
              voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias culpa delectus dicta doloribus
              eligendi
              esse est illum impedit incidunt iste iusto neque, nulla, odio quaerat recusandae reprehenderit soluta.
              Alias?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cumque excepturi itaque, minus
              nemo odit qui. Ab architecto, consequuntur fuga odio officia perspiciatis praesentium, quaerat rerum saepe
              sit
              totam!</p>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem deleniti error esse
              facere
              maiores minus neque optio porro quibusdam quidem, rerum saepe sequi, tempore tenetur totam veritatis
              voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias culpa delectus dicta doloribus
              eligendi
              esse est illum impedit incidunt iste iusto neque, nulla, odio quaerat recusandae reprehenderit soluta.
              Alias?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cumque excepturi itaque, minus
              nemo odit qui. Ab architecto, consequuntur fuga odio officia perspiciatis praesentium, quaerat rerum saepe
              sit
              totam!</p>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem deleniti error esse
              facere
              maiores minus neque optio porro quibusdam quidem, rerum saepe sequi, tempore tenetur totam veritatis
              voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias culpa delectus dicta doloribus
              eligendi
              esse est illum impedit incidunt iste iusto neque, nulla, odio quaerat recusandae reprehenderit soluta.
              Alias?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cumque excepturi itaque, minus
              nemo odit qui. Ab architecto, consequuntur fuga odio officia perspiciatis praesentium, quaerat rerum saepe
              sit
              totam!</p>
            <hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem deleniti error esse
              facere
              maiores minus neque optio porro quibusdam quidem, rerum saepe sequi, tempore tenetur totam veritatis
              voluptates.</p>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
