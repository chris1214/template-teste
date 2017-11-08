<script>
  import myModuleTitle from "src/components/myModuleTitle"
  import myContainer from "src/components/myContainer"

  import myActionsButton from "src/components/myActionsButton"

  export default{
      data(){
          return{
            value1: "",
            activeName: "first"
          }
      },
      components:{
        myModuleTitle,
        myContainer,
        myActionsButton
      }
  }





</script>
<template>
  <div>

    <myModuleTitle title="Usúario" :card="false">
    </myModuleTitle>

    <myContainer>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="Creat/Edit" name="first">
          <el-form :inline="true" label-position="top">
            <el-form-item label="Nome">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="Nome de usuario" prop="checkPass">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="Email">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="Telefone">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="Senha" prop="checkPass">
              <el-input type="text"></el-input>
            </el-form-item>

            <el-form-item label="Email">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="Habilitado">
              <el-switch v-model="value1">
              </el-switch>
            </el-form-item>

            <myActionsButton>
              <el-button-group>
                <el-button size="mini" type="warning">Criar</el-button>
                <el-button size="mini">Voltar para pesquisa</el-button>
              </el-button-group>
            </myActionsButton>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </myContainer>
  </div>
</template>
<style scoped>

</style>
