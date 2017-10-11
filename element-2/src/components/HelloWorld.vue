<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }



</script>
<template>
  <div>
    <el-container>


      <el-aside width="65px" class="min-width-65" v-bind:class="{containerLogo: !isCollapse}">
        <div class="logo">
          <el-row>
            <el-col :span="22" class="min-width-175 " v-bind:class="{containerLogo: !isCollapse}">
              <el-row>
                <el-col :span="5" class="container-brand-icon">
                  <img src="../assets/img/logo.png" class="brand-icon" @click="isCollapse = !isCollapse">
                </el-col>
                <el-col :span="9" style="text-align: center;">
                  <span class="textBrand" v-bind:class="{brandText: !isCollapse}">Nifty</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>


        <el-menu default-active="2" class="el-menu-vertical meuMenu" :collapse="isCollapse">
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
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Three</span>
          </el-menu-item>
        </el-menu>

      </el-aside>

      <el-container class="meuContainer">
        <el-header class="meuMargin">
          <el-row>
            <el-col :span="3">

            </el-col>
            <el-col :span="6"><a href="#">Link 1</a></el-col>
            <el-col :span="6"><a href="#">Link 2</a></el-col>
            <el-col :span="6"><a href="#">Link 3</a></el-col>
            <el-col :span="3"><a href="#">Link 4</a></el-col>
          </el-row>
        </el-header>

        <el-main>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam, commodi deserunt doloribus eaque,
            fuga fugit harum hic id ipsum iste labore maxime nam nisi odio pariatur rem repellendus voluptate?</p>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>

    </el-container>

  </div>

</template>
<style>

.min-width-65 {
  min-width: 65px !important;
  width: 65px !important;
  transition: 1s;
}
.min-width-175 {
  min-width: 175px;
}
.containerLogo {
  min-width: 200px !important;
  width: 200px !important;
  background-color: #fff;
  transition: 0.5s;
}
.logo {
  line-height: 55px;
}

.brand-icon {
    display: block;
    line-height: 55px;
    width: 100%;
    height: 100%;
    float: left;
    margin: 0;
    cursor:pointer;
}
.container-brand-icon {
    background-color: white;
    text-align: center;
    min-width: 65px;
    height: 56px !important;
}

.brand-text {
    font-size: 21px;
    font-weight: 600;
    z-index: 3;
    color: black;
    transition: 0.5s;
}

.textBrand {
  color: white;
  transition-duration: 0.5s;
  font-size: 21px;
  font-weight: 600;
}
.brandText {
  transition: 0.5s;
  font-size: 21px;
  font-weight: 600;
  color: black;
}
.container-brand-icon {
    text-align: center;
    height: 55px;
    padding: 0 0 0 20px;
}
.brand-icon {
    display: block;
    line-height: 55px;
    width: 30px;
    margin-right: 5px;
    height: 100%;
    float: left;
    margin: 0;
    cursor:pointer;
}
.imgLogo {
    margin-right: 5px;
    width: 24px;
    min-width: 24px;
    max-width: 24px;
    text-align: center;
}
.meuContainer {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    padding-left: 64px;
  }
.meuMenu {
    height: 100%;
    min-height: 100%;
    max-height: 100%;
    z-index: 6;
}
html {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
}
body {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
}
#app {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
}
#app > div {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
}
.el-container {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  height: 100%;
  border-right: none;
}

.el-header {
  line-height: 55px;
  background-color: #B3C0D1;
  color: #333;
  position: fixed;
  top: 0px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 56px !important;
  z-index: 5;
  padding: 0 0 0 120px;
}
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  z-index: 2;
}
.el-footer {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 60px;
  min-height: 60px;
  max-height: 60px;
}

.el-aside {
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  position: fixed;
  z-index: 10;
  overflow: inherit;
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

