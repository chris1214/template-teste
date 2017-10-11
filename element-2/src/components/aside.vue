<script>
  export default {
    props: ["src", "textLogo"],
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
    <el-aside width="65px" class="min-width-65" v-bind:class="{containerLogo: !isCollapse}">
      <div class="logo">
        <el-row>
          <el-col :span="22" class="min-width-175 " v-bind:class="{containerLogo: !isCollapse}">
            <el-row>
              <el-col :span="5" class="container-brand-icon">
                <img :src="src" class="brand-icon" @click="isCollapse = !isCollapse">
              </el-col>
              <el-col :span="9" style="text-align: center;">
                <span class="textBrand" v-bind:class="{brandText: !isCollapse}">{{ textLogo }}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>


      <el-menu default-active="2" class="el-menu-vertical" :collapse="isCollapse">
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
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  height: 100%;
  border-right: none;
}
.el-aside {
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  position: fixed;
  z-index: 10;
  overflow: inherit;
}
</style>
