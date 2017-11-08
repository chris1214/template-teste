<script>
  export default {
    data() {
      return {
        img: '../assets/img/logo.png',
        img2: 'logo.png',
        img3: 'http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg',
        isCollapse: true,
      };
    },
    props: ["src", "title", "srcUser"],
    watch: {
      src: function (value) {
        console.log("Value", value)
      }
    },
    computed: {
      _src: function () {
       if(this.src != "" && this.src != null){
           console.log("src")
          return this.src
        }else {
          console.log("null")
         return null
        }
      },
      _srcImg3: function () {
       if(this.img3 != "" && this.src != null){
           console.log("img3")
          return this.img3
        }else {
          console.log("null")
         return null
        }
      }
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
    <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

      <el-row>
        <el-col :span="22" class="min-width-175">
          <el-row>
            <el-col :span="5" class="container-brand-icon">
              <img src="./logo.png" class="brand-icon" @click="isCollapse = !isCollapse">
            </el-col>
            <el-col :span="9" class="container-text">
              <span v-bind:class="{brandText: !isCollapse}">{{ title }}</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <div class="profile" v-show="!isCollapse">
        <el-row>
          <el-col :span="24" class="corpo-img">
            <img src="../assets/img/menina-camera.jpg" alt="Nifty Logo" class="class100 border-radius50"
                 rounded="circle"/>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24" class="height-60px">
            <p class="mnp-name">Aaron Chavez</p>
            <span class="mnp-desc">aaron.cha@themeon.net</span>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-tooltip class="item" effect="dark" content="Action 1" placement="top-start">
              <a href="#">
                <el-button type="text" icon="el-icon-edit" size="mini"></el-button>
              </a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Action 2" placement="top-start">
              <a href="#">
                <el-button type="text" icon="el-icon-share" size="mini"></el-button>
              </a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Action 3" placement="top-start">
              <a href="#">
                <el-button type="text" icon="el-icon-arrow-down" size="mini"></el-button>
              </a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Action 5" placement="top-start">
              <a href="#">
                <el-button type="text" icon="el-icon-arrow-right" size="mini"></el-button>
              </a>
            </el-tooltip>
            <el-dropdown>
                    <span class="el-dropdown-link">
                      <el-button type="text" icon="el-icon-more" size="mini" class="transform-i"></el-button>
                    </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 8</el-dropdown-item>
                <el-dropdown-item>Action 9</el-dropdown-item>
                <el-dropdown-item>Action 10</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>

      <el-submenu index="1" v-show="isCollapse">
        <template slot="title">
          <i class="el-icon-information"></i>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">Action 1</el-menu-item>
          <el-menu-item index="1-2">Action 2</el-menu-item>
          <el-menu-item index="1-3">Action 3</el-menu-item>
          <el-menu-item index="1-3">Action 4</el-menu-item>
          <el-menu-item index="1-3">Action 5</el-menu-item>
          <el-menu-item index="1-3">Action 6</el-menu-item>
          <el-menu-item index="1-3">Action 7</el-menu-item>
          <el-menu-item index="1-3">Action 8</el-menu-item>
          <el-menu-item index="1-3">Action 9</el-menu-item>
          <el-menu-item index="1-3">Action 10</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">Navigator Three</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">Navigator One</span>
        </template>
        <el-menu-item-group>
          <span slot="title">Group One</span>
          <el-menu-item index="4-1">item one</el-menu-item>
          <el-menu-item index="4-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="4-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
          <span slot="title">item four</span>
          <el-menu-item index="4-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>

    </el-menu>

  </div>
</template>
<style scoped>
#profileIcon .el-tooltip {
  padding: 0 5px;
}
.transform-i {
  transform: rotate(90deg);
}
/*profile */
.profile {
  height: 210px;
  text-align: center;
}
.profile div div.height-60px .mnp-name, .profile div div.height-60px .mnp-desc{
  color: black !important;
}

.el-menu--collapse > .profile > div {
  padding: 0px !important;
}
/*profile */
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
/* el-menu */
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
  height: 100%;
  border-right: none;
  overflow: overlay;
}
.el-menu-vertical {
  min-height: 100%;
  height: 100%;
}
.el-menu-vertical {
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
  color: black;
  transition-duration: 0.1s;
}
.brandText {
  transition: 0.1s;
  color: black;
}
</style>
