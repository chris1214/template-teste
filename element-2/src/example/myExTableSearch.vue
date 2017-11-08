<script>
  import myModuleTitle from "src/components/myModuleTitle"
  import myContainer from "src/components/myContainer"

    export default{
        data(){
            return{
            isCollapse: true,
            value1: true,
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
            }
        },
        components:{
          myModuleTitle,
          myContainer
        }
    }
</script>
<template>
  <div>
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
  </div>
</template>
<style scoped>
.el-form-item {
  width: 100% !important;
}

</style>
