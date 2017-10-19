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
    <div>
        <el-container>


            <mayAside src="./logo.png" title="Nifty" name="aside"/>

            <el-container class="meuContainer">

                <el-header>
                    <el-row class="display-2">
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

                    </el-row>

                    <el-row class="display-1">
                        <el-col :xs="18" :sm="18" :md="18" :lg="18">
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
                        <el-col :xs="6" :sm="6" :md="6" :lg="6" class="text-align-end">
                            <el-dropdown trigger="click">
                                 <span class="el-dropdown-link">
                      <i class="el-icon-more transform-i"></i>
                    </span>
                                <el-dropdown-menu slot="dropdown">
                                    <div class="display-3">
                                        <el-dropdown-item>
                                            <span>Navigator Two</span>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <span>Navigator Three</span>
                                        </el-dropdown-item>
                                        <el-dropdown-item>
                                            <span>Navigator One</span>
                                        </el-dropdown-item>
                                    </div>

                                    <el-dropdown-item>
                                        <a href="#">Texto sem icone</a>
                                    </el-dropdown-item>
                                    <el-dropdown-item>
                                        <a href="#"><i class="el-icon-edit"></i>Texto com icone</a>
                                    </el-dropdown-item>

                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-col>

                    </el-row>

                </el-header>

                <el-main>
                    <el-row>
                        <el-col :span="12">
                            <h1>Title</h1>
                        </el-col>
                        <el-col :span="12" class="text-align-end padding-11">
                            <el-button size="medium">Medium</el-button>
                        </el-col>
                    </el-row>

                    <el-collapse v-model="activeName" accordion>
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


                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>

        </el-container>

    </div>

</template>
<style>
@media (min-width: 349px){
  .display-2 {
    display: none !important;
  }
  @media (min-width: 800px){
    .display-3 {
      display: block !important;
    }
  }
}
@media (min-width: 800px){
  .display-2 {
    display: none !important;
  }
  .display-3 {
    display: none !important;
  }
  @media (min-width: 1065px){
    .display-1 {
      display: block !important;
    }
  }
}
@media (min-width: 1065px){
  .display-2 {
    display: block !important;
  }
  @media (min-width: 349px){
    .display-1 {
      display: none !important;
    }
  }
}
.padding-11{
  padding: 11px 0;
}
.text-align-end {
  text-align: end;
}
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
  padding: 0 83px 0 150px;
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
