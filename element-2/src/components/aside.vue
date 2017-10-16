<script>
  export default {
    props: ["src", "textLogo"],
    data() {
      return {
        img: 'http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
        img2: './logo.png',
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


      <el-menu default-active="2" class="el-menu-vertical" :collapse="isCollapse">

        <el-row>
          <el-col :span="22" class="min-width-175">
            <el-row>
              <el-col :span="5" class="container-brand-icon">
                <img :src="img" class="brand-icon" @click="isCollapse = !isCollapse">
              </el-col>
              <el-col :span="9" class="container-text">
                <span class="textBrand" v-bind:class="{brandText: !isCollapse}">{{ textLogo }}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>

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

  </div>
</template>
<style>
/* el-menu */
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  height: 100%;
  border-right: none;
}
.el-menu-vertical {
  min-height: 100%;
  height: 100%;
}
.el-menu {
  position: fixed;
  z-index: 10;
}
/* logo */

.min-width-175 {
  min-width: 175px;
}
.container-brand-icon {
    text-align: center;
    min-width: 65px;
    height: 55px;
    padding: 0 0 0 20px;
    margin-right: 10px;
}
.brand-icon {
    display: block;
    line-height: 55px;
    height: 100%;
    float: left;
    margin: 0;
    cursor:pointer;
    width: 30px;
}
.container-text {
  line-height: 55px;
}
.textBrand {
  color: white;
  transition-duration: 0.1s;
}
.brandText {
  transition: 0.5s;
  color: black;
}

</style>
