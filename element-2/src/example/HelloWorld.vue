<script>
  import mayAside from "../components/aside"
  import mayTable from "./body/exampleTemplate/table"
  import mayFilter from "./body/exampleTemplate/filter"
  import mayCreat from "./body/creat"
  import mayTabs from "./body/tabs"
  export default {
  components: {
    mayAside,
    mayTable,
    mayFilter,
    mayCreat,
    mayTabs
  },
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


      <mayAside src="./logo.png" title="Nifty" name="aside"/>

      <el-container class="meuContainer">

        <el-header>
          <el-row>
            <el-col :span="22">
              <el-menu mode="horizontal">
                <el-menu-item index="2">
                  <span slot="title">Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">Navigator Three</span>
                </el-menu-item>
                <el-submenu index="4">
                  <template slot="title">
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
                <el-menu-item index="5">
                  <span slot="title">Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="6">
                  <span slot="title">Navigator Three</span>
                </el-menu-item>
              </el-menu>
            </el-col>

            <el-col :span="2">
              <el-menu mode="horizontal">
                <el-menu-item index="1">
                  <span slot="title">
                    <el-dropdown>
                      <span class="el-dropdown-link">
                        <el-button type="text" icon="el-icon-more" size="mini" class="transform-i"></el-button>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                  </el-dropdown-menu>
                   </el-dropdown>
                  </span>
                </el-menu-item>
              </el-menu>
            </el-col>

          </el-row>

        </el-header>

        <el-main>
          <mayFilter/>
          <br><br>
          <mayTable/>
          <br><br>
          <mayCreat/>
          <br><br>
          <mayTabs/>
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
html, body, #app, .el-container, #app > div {
    min-height: 100%;
    max-height: 100%;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
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
  padding: 0 85px 0 150px;
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
