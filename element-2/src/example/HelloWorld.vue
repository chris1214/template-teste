<script>
  import myLogin from 'src/components/myLogin'

  import myExampleCreate from "./myCreate"
  import myExTableSearch from "./myExTableSearch"
  import myExShow from "./myExShow"
  export default {
  components: {
    myLogin,
    myExampleCreate,
    myExTableSearch,
    myExShow
  },
    data() {
      return {

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
<!--
  <myBody>
    <myAside slot="aside" src="logo.png" title="Nifty"/>

    <myHeader slot="header">
      <div>
        <el-col :xs="12" :sm="12" :md="12" :lg="12">
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
          </el-menu>
        </el-col>

        <el-col :xs="12" :sm="12" :md="12" :lg="12" class="text-align-end">
          <a href="#">Texto sem icone</a>
          <a href="#"><i class="el-icon-edit"></i>Texto com icone</a>
          <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more transform-i"></i>
                  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 8</el-dropdown-item>
              <el-dropdown-item>Action 9</el-dropdown-item>
              <el-dropdown-item>Action 10</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </div>
    </myHeader>


    <el-main slot="main">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>

      &lt;!&ndash;<myExampleCreate />&ndash;&gt;
      &lt;!&ndash;<myExTableSearch />&ndash;&gt;
      &lt;!&ndash;<myExShow />&ndash;&gt;

    </el-main>

    <el-footer slot="footer">Footer</el-footer>
  </myBody>
-->
  <myLogin />
</template>
<style scoped>
.text-align-end {
  text-align: end;
}
</style>
