<script>
  import myAside from "src/components/myAside"
  import myHeader from "src/components/myHeader"
  import myContainer from "src/components/myContainer"
  import myBody from "src/components/myBody"
  import myTable from "./body/exampleTemplate/table"
  import myFilter from "./body/exampleTemplate/filter"
  import myCreat from "./body/creat"
  import myTabs from "./body/tabs"
  import myModuleTitle from "src/components/myModuleTitle"
  export default {
  components: {
    myAside,
    myTable,
    myFilter,
    myCreat,
    myTabs,
    myContainer,
    myHeader,
    myModuleTitle,
    myBody
  },
    data() {
      return {
        isCollapse: true,
        tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
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
  <myBody>
    <myAside slot="aside" src="logo.png" title="Nifty"/>

    <myHeader slot="header">
      <div slot="menu1024">
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

      <myModuleTitle title="Eu sou um titulo">
        <el-button>Default</el-button>
        <el-button size="medium">Medium</el-button>
        <el-button size="small">Small</el-button>
        <el-button size="mini">Mini</el-button>
      </myModuleTitle>

      <myContainer>
        <el-collapse accordion>
          <el-collapse-item title="Filtros" name="1">
            <el-row :gutter="20">
              <el-col :span="12">
                <label>Nome </label>
                <el-input
                />
              </el-col>
              <el-col :span="12">
                <label>Sobrenome</label>
                <el-input
                />
              </el-col>
            </el-row>

            <el-row :gutter="20">
              <el-col :span="12">
                <el-button size="medium" type="warning">pesquisar</el-button>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </myContainer>

      <myContainer>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="Date"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="Name"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="Address">
          </el-table-column>
        </el-table>
      </myContainer>

    </el-main>

    <el-footer slot="footer">Footer</el-footer>
  </myBody>
</template>
<style>
.padding-11{
  padding: 11px 0;
}

</style>
