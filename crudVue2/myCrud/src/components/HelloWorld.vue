<script>
export default {
  data () {
    return {
      tableData: [],
      total: '',
      page: 1,
      itensPerPage: 10,
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      myTableData() {
        let t = this
            this.showLoading()

            let start = (this.page * this.itensPerPage) - (this.itensPerPage)
            let end = this.page * this.itensPerPage

            if (this.search){
              qString = `&q=${this.search}`
            }

            this.$http.get(`/breweries?_start=${start}&_end=${end}`).then(
             response=>{
               t.tableData = response.body;
               t.total = response.headers.get('X-Total-Count');
             },
             error=>{
               console.log(error)
             }).finally(function () {
              t.hideLoading();
            })
      },
      showLoading(){
            this.isLoading=true;
        },
      hideLoading(){
          this.isLoading=false;
      },
      created(){
        this.myTableData();
    },
    }
}

</script>
<template>
  <div>
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

        <myModuleTitle :card="false" title="Eu sou um titulo">
          <el-button>Default</el-button>
          <el-button size="medium">Medium</el-button>
          <el-button size="small">Small</el-button>
          <el-button size="mini">Mini</el-button>
        </myModuleTitle>
        <myContainer :card="false" :padding="false">
          <el-collapse>
            <el-collapse-item title="Filtros" name="1">
              <el-form :inline="true" label-position="top">
                <el-row :gutter="20">
                  <el-col :span="12">
                    <el-form-item label="Nome">
                      <el-input type="text"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="Sobrenome">
                      <el-input type="text"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>

              <el-row :gutter="20">
                <el-col :span="12">
                  <el-button size="mini" type="warning">pesquisar</el-button>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </myContainer>

        <myContainer :card="true" :padding="false">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="name"
              width="180">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="phone"
              width="180">
            </el-table-column>
            <el-table-column
              prop="city"
              label="city">
            </el-table-column>
          </el-table>
        </myContainer>

      </el-main>

      <el-footer slot="footer">Footer</el-footer>
    </myBody>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
