<script>
  import myModuleTitle from "src/components/myModuleTitle"
  import myContainer from "src/components/myContainer"

  export default{
      data(){
          return{
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

    <myModuleTitle title="Usúario asdas" backgroundColorWhite="false" padding15px="false">
    </myModuleTitle>

    <myContainer backgroundColorWhite="false" padding15px="false">

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

        <el-row :gutter="20">
          <el-col :span="12">
            <el-button-group>
              <el-button size="mini" type="warning">Criar</el-button>
              <el-button size="mini">Voltar para pesquisa</el-button>
            </el-button-group>
          </el-col>
        </el-row>
      </el-form>
    </myContainer>
  </div>
</template>
<style scoped>

</style>
