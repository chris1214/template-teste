<script>
export default{
    data(){
        return{
          activeName: 'first'
        }
    },
    components:{
    },
}

</script>
<template>
  <div>
    <myModuleTitle title="Show Tabs" :card="false"></myModuleTitle>

    <myContainer :padding="false">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="Detalhes 1" name="first">
            <el-row>
              <el-col :span="6">
                <myDetailsShow label="Nome:" value="Christopher"/>
              </el-col>
              <el-col :span="6">
                <myDetailsShow label="Nome de usuario:" value="Chris"/>
              </el-col>
              <el-col :span="6">
                <myDetailsShow value="Christopher@hotmail.com">
                <span slot="label">
                  Email:
                </span>
                </myDetailsShow>
              </el-col>
              <el-col :span="6">
                <myDetailsShow label="Telefone:">
                  <span slot="value">
                    123456789
                  </span>
                </myDetailsShow>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <myDetailsShow label="Habilitado:" value="Sim"/>
              </el-col>
            </el-row>

          <myActionsButton>
            <el-button size="mini">Voltar para pesquisa</el-button>
          </myActionsButton>
        </el-tab-pane>

        <el-tab-pane label="Detalhes 2" name="second">
          <myDetailsShow label="Nome:" value="Christopher" format="inline" labelWidth="200"/>
          <myDetailsShow label=" Nome de usuario:" value="Chris" format="inline" labelWidth="200"/>
          <myDetailsShow label="Email:" value="Christopher@hotmail.com" format="inline" labelWidth="200"/>
          <myDetailsShow label="Telefone:" value="123456789" format="inline" labelWidth="200"/>
          <myDetailsShow label="Habilitado:" value="Sim" format="inline" labelWidth="200"/>
        </el-tab-pane>

        <el-tab-pane label="Detalhes 3" name="third">
          <myDetailsShow label="Nome:" value="Christopher" format="inline"/>
          <myDetailsShow label=" Nome de usuario:" value="Chris" format="inline"/>
          <myDetailsShow label="Email:" value="Christopher@hotmail.com" format="inline"/>
          <myDetailsShow label="Telefone:" value="123456789" format="inline"/>
          <myDetailsShow label="Habilitado:" value="Sim" format="inline"/>
        </el-tab-pane>

        <el-tab-pane label="Detalhes 4" name="fourth">
          <el-row>
            <el-col :span="12">
              <myDetailsShow label="Nome:" value="Christopher"/>
              <myDetailsShow label="Nome:" value="Christopher"/>
              <myDetailsShow label="Nome:" value="Christopher"/>
              <myDetailsShow label="Nome:" value="Christopher"/>
              <myDetailsShow label="Nome:" value="Christopher"/>
            </el-col>
            <el-col :span="12">
              <myDetailsShow label="Nome:" value="Christopher"
                             format="show-collum-grid "/>
              <myDetailsShow label="Nome:" value="Christopher"
                             format="show-collum-grid "/>
              <myDetailsShow label="Nome:" value="Christopher"
                             format="show-collum-grid "/>
              <myDetailsShow label="Nome:" value="Christopher"
                             format="show-collum-grid "/>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </myContainer>
  </div>
</template>
