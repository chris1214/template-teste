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
  <el-row>
    <el-col :span="24">
      <el-collapse>
        <el-collapse-item title="Filtros">

          <el-form label-position="top">
            <div class="row">

              <div class="col-xs-12 col-sm-6 col-md-4">
                <meuInput label="Nome" placeholder="placeholder 123"/>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <el-form-item label="Select">
                  <el-select v-model="value" placeholder="placeholder">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>

              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <meuInput label="Email" placeholder="Email"/>
              </div>

            </div>

            <div class="row">

              <div class="col-xs-12 col-sm-6 col-md-4">
                <meuInput placeholder="Telefone"/>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <meuInput placeholder="Senha"/>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-4">
                <meuInput placeholder="Repita a Senha"/>
              </div>

            </div>

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
