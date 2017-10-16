<script>
  import meuInput from "../../../components/input"
    export default {
      components: {
        meuInput,
      },
      data(){
            return {
            value: '',
            options: [{
              value: 'Option1',
              label: 'Option1'
            }, {
              value: 'Option2',
              label: 'Option2'
            }, {
              value: 'Option3',
              label: 'Option3'
            }, {
              value: 'Option4',
              label: 'Option4'
            }, {
              value: 'Option5',
              label: 'Option5'
            }],
          }
        }

    }





</script>

<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <el-collapse>
        <el-collapse-item title="Filtros">
            <el-form label-position="top">
              <el-row :gutter="20">
                <el-col :xs="8" :sm="8" :md="8" :lg="8">
                  <meuInput label="Nome" placeholder="placeholder 123"/>
                </el-col>

                <el-col :xs="8" :sm="8" :md="8" :lg="8">
                  <el-form-item label="Select">
                    <el-select v-model="value" placeholder="Select">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>

                </el-col>

                <el-col :xs="8" :sm="8" :md="8" :lg="8">
                  <meuInput label="Email" placeholder="Email"/>
                </el-col>
              </el-row>

              <el-row :gutter="20">

                <el-col :span="8">
                  <meuInput placeholder="Telefone"/>
                </el-col>

                <el-col :span="8">
                  <meuInput placeholder="Senha"/>
                </el-col>

                <el-col :span="8">
                  <meuInput placeholder="Repita a Senha"/>
                </el-col>

              </el-row>

            </el-form>
          <el-row :gutter="10">
            <el-col :span="24">
              <div class="el-button-group">
                <button type="button" class="el-button el-button--primary el-button--small">
                       <span>
                         <i class="glyphicon glyphicon-ok"></i>
                        Salvar
                       </span>
                </button>
                <button type="button" class="el-button el-button--info el-button--small">
                      <span>
                      <i class="glyphicon glyphicon-chevron-left"></i>
                        Voltar para pesquisa
                      </span>
                </button>
              </div>
            </el-col>

          </el-row>

        </el-collapse-item>
      </el-collapse>
    </el-col>
  </el-row>
</template>
<style>
</style>
