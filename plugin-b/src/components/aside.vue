<script>
  export default {
   data: function() {
     return {
       isCollapse: true,
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
  <div class="aside">

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

    <div class="leftMenu">
      <el-menu theme="dark" default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">

        <el-menu-item index="2" class="perfil" v-show="!isCollapse">
          <template>
            <el-row>
              <el-col :span="24" class="corpo-img">
                <img src="../assets/img/menina-camera.jpg" alt="Nifty Logo" class="class100 border-radius50" rounded="circle"/>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="24" class="height-60px">
                <p class="mnp-name">Aaron Chavez</p>
                <span class="mnp-desc">aaron.cha@themeon.net</span>
              </el-col>
            </el-row>

            <el-row slot="title">
              <el-col :span="24">
                <a href="#">
                  <el-button type="text" icon="el-icon-edit" size="mini"></el-button>
                </a>
                <a href="#">
                  <el-button type="text" icon="el-icon-share" size="mini"></el-button>
                </a>

                <el-dropdown>
                    <span class="el-dropdown-link">
                      <el-button type="text" icon="el-icon-more" size="mini" class="transform-i"></el-button>
                    </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>

              </el-col>
            </el-row>
          </template>
        </el-menu-item>

        <el-submenu index="3">
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

        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <span slot="title">Navigator Three</span>
        </el-menu-item>
      </el-menu>
    </div>

  </div>
</template>


<style>
/* logo */
.containerLogo {
  background-color: #324157;
  min-width: 192px;
  transition: 0.50s;
}
.logo {
  z-index: 3;
  line-height: 52px;
  position: fixed;
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
    text-align: center;
    min-width: 64px;
    height: 55px;
}
.botao {
  z-index: 3;
}

.brand-text {
    font-size: 21px;
    font-weight: 600;
    z-index: 3;
    color: black;
}

/* logo */

/* help */

.borderNone {
  border: none;
}

.brandTextColor {
  color: white !important;
}

.transform-i {
  transform: rotate(90deg);
}

/* help */
/* img */

img {
    vertical-align: middle;
}

/* img */

/* help */

.borderNone {
  border: none;
}

.brandTextColor {
  color: white !important;
}

.transform-i {
  transform: rotate(90deg);
}

/* help */
.el-menu-vertical:not(.el-menu--collapse) {
  width: 220px;
  min-height: 100%;
  height: 100%;
}

/* img */

img {
    vertical-align: middle;
}

/* img */

/*aside */

.aside {
  position: fixed;
  z-index: 2;
  min-height: 100%;
  height: 100%;
  background-color: #324157;
  overflow:auto;
}
/*aside */

/*perfil */
.perfil {
  height: 210px;
  text-align: center;
}

.el-menu--collapse > .perfil > div {
  padding: 0px !important;
}

/*perfil */

/*img menu lateral*/

.corpo-img {
  padding-top: 20px;
  line-height: 48px;
  height: 90px;
}

.el-menu--collapse > .class100 {
  width: 45px;
  height: 45px;
  background-size: cover;

}
.class100 {
  width: 64px;
  height: 64px;
  background-size: cover;

}

.border-radius50 {
  border-radius: 50%;
  background-color: #929191;
}

/*img menu lateral*/

/* menu lateral */

.height-60px {
  height: 60px;
}

.mnp-desc {
    font-size: .9em;
    color: #abb1b7;
    opacity: .75;
}
.mnp-name {
    color: #abb1b7;
    margin: 0;
    font-size: 1em;
    font-weight: 600;
    height: 20px;
}

/* menu lateral */



.leftMenu {
  padding-top: 55px;
}
.leftMenu ul {
  background-color: #324157;
  color: white;
}



</style>
