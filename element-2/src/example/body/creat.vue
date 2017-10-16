<script>
   import meuInput from "../../components/input"
    export default {
      components: {
        meuInput,
      },
      data() {
        return {
          value1: true
        }
      }
    }





</script>

<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">

          <el-form label-position="top">

            <el-row :gutter="10">
              <el-col :xs="8" :sm="8" :md="8" :lg="3">
                <meuInput label="Name"/>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="3">
                <meuInput label="Username"/>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="3">
                <meuInput label="Email"/>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :xs="8" :sm="8" :md="8" :lg="3">
                <meuInput label="Telefone"/>
              </el-col>
              <el-col :xs="8" :sm="8" :md="8" :lg="3">
                <meuInput label="Senha"/>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-form-item label="Habilitado">
                <el-switch
                  v-model="value1"
                  on-text=""
                  off-text="">
                </el-switch>
              </el-form-item>
            </el-row>

            <!--<div class="row">

              <div class="col-xs-6 col-sm-6 col-md-4">
                <meuInput label="Name"/>
              </div>

              <div class="col-xs-6 col-sm-6 col-md-4">
                <meuInput label="Username"/>
              </div>

              <div class="col-xs-6 col-sm-6 col-md-4">
                <meuInput label="Email"/>
              </div>

            </div>

            <div class="row">

              <div class="col-xs-6 col-sm-6 col-md-4">
                <meuInput label="Telefone"/>
              </div>

              <div class="col-xs-6 col-sm-6 col-md-4">
                <meuInput label="Senha"/>
              </div>

            </div>

            <div class="row">

              <div class="col-xs-6 col-sm-6 col-md-4">
                <el-form-item label="Habilitado">
                  <el-switch
                    v-model="value1"
                    on-text=""
                    off-text="">
                  </el-switch>
                </el-form-item>
              </div>

            </div>-->

          </el-form>

          <el-row :gutter="10">
            <el-col :span="24">
              <div class="el-button-group">
                <button type="button" class="el-button el-button--primary el-button--small">
                       <span>
                        Salvar
                       </span>
                </button>
                <button type="button" class="el-button el-button--default el-button--small">
                      <span>
                        Voltar para pesquisa
                      </span>
                </button>
                <button type="button" class="el-button el-button--default el-button--small">
                      <span>
                        Voltar para detalhes
                      </span>
                </button>
              </div>
            </el-col>

          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>

</template>
