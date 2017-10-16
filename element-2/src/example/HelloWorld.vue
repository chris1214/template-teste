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


      <mayAside src="./logo.png" textLogo="Nifty"/>

      <el-container class="meuContainer">

        <el-header>
          <el-row>
            <el-col :span="6"><a href="#">Link 1</a></el-col>
            <el-col :span="6"><a href="#">Link 2</a></el-col>
            <el-col :span="6"><a href="#">Link 3</a></el-col>
            <el-col :span="3"><a href="#">Link 4</a></el-col>
          </el-row>
        </el-header>

        <el-main>
          <mayFilter />
          <br><br>
          <mayTable />
          <br><br>
          <mayCreat />
          <br><br>
          <mayTabs />
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
  padding: 0 0 0 150px;
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
