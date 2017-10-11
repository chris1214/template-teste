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

      <!--
            <div class="logo">
              <el-row>
                <el-col :span="22" class="" v-bind:class="{containerLogo: !isCollapse}">
                  <el-row>
                    <el-col :span="5" class="container-brand-icon">
                      <img src="../assets/img/logo.png" alt="Nifty Logo" class="brand-icon" @click="isCollapse = !isCollapse">
                    </el-col>
                    <el-col :span="9" style="text-align: center;">
                      <span class="brand-text" v-bind:class="{brandTextColor: !isCollapse}">Nifty</span>
                    </el-col>
                  </el-row>
                </el-col>

                <el-col :span="2" class="botao">
                  <el-button @click="isCollapse = !isCollapse" class="transform-i borderNone">|||</el-button>
                </el-col>
              </el-row>
            </div>
      -->

      <el-aside width="65px">

        <el-menu default-active="2" class="el-menu-vertical meuMenu" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
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
        <el-header>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
          </el-radio-group>

        </el-header>
        <el-main>

          <p>corpo</p>

        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>

    </el-container>

  </div>

</template>
<style>
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
     position: fixed;
    z-index: 10 !important;
}
html {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}
body {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}
#app {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}
#app > div {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}
.el-container {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
}
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    position: fixed;
    top: 0px;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 60px;
    z-index: 3;
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
    background-color: #324157;
    width: auto !important;
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

