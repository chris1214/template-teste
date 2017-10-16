<script>
  import detailsShow from "../../components/detailsShow"
  import meuSwitch from "../../components/switch"
    export default {
      components: {
        detailsShow,
        meuSwitch
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
        <el-tabs type="border-card">

          <el-tab-pane label="Detalhes">

            <div class="tab-body">
              <el-row>
                <el-col :span="4">
                  <detailsShow label="name">
                    meu nome é
                  </detailsShow>
                </el-col>

                <el-col :span="4">
                  <detailsShow>
                    meu Telefone é 123
                  </detailsShow>
                </el-col>

                <el-col :span="4">
                  <detailsShow label="name">
                    meu nome é
                  </detailsShow>
                </el-col>

              </el-row>
            </div>

            <div class="tab-action">

              <el-row>
                <el-col :span="24">
                  <div class="el-button-group">
                    <button type="button" class="el-button el-button--primary el-button--small">
                      <span>Salvar</span>
                    </button>
                    <button type="button" class="el-button el-button--default el-button--small">
                      <span>Voltar para pesquisa</span>
                    </button>
                    <button type="button" class="el-button el-button--default el-button--small">
                      <span>Voltar para detalhes</span>
                    </button>
                  </div>
                </el-col>

              </el-row>
            </div>

          </el-tab-pane>

          <el-tab-pane label="Busines Line">
            <div class="tab-flex">

              <el-row>
                <el-col :span="4">
                  <meuSwitch label="Nome: ">
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                  </meuSwitch>
                </el-col>
              </el-row>

            </div>

          </el-tab-pane>

          <el-tab-pane label="Contratos">
            <div class="tab-flex">

              <el-row>
                <el-col :span="4">
                  <p>Música</p>
                </el-col>
              </el-row>

              <hr>

              <el-row>

                <el-col :span="4">
                  <meuSwitch label="Estilos musicais: ">
                    <el-switch
                      v-model="value1"
                      on-text=""
                      off-text="">
                    </el-switch>
                  </meuSwitch>
                </el-col>

              </el-row>

            </div>

          </el-tab-pane>

          <el-tab-pane label="Form">

            <div class="tab-flex">

              <el-row>
                <el-col :span="4">
                  <p>Música</p>
                </el-col>
              </el-row>

              <hr>

              <el-row>
                <el-col :span="4">
                  <meuSwitch label="Form crud:">
                    <el-switch
                      v-model="value1"
                      on-text=""
                      off-text="">
                    </el-switch>
                  </meuSwitch>
                </el-col>

                <el-col :span="4">
                  <meuSwitch label="Form custom:">
                    <el-switch
                      v-model="value1"
                      on-text=""
                      off-text="">
                    </el-switch>
                  </meuSwitch>
                </el-col>
                <el-col :span="4">
                  <meuSwitch label="Form dashboard:">
                    <el-switch
                      v-model="value1"
                      on-text=""
                      off-text="">
                    </el-switch>
                  </meuSwitch>
                </el-col>
                <el-col :span="4">
                  <meuSwitch label="Música:">
                    <el-switch
                      v-model="value1"
                      on-text=""
                      off-text="">
                    </el-switch>
                  </meuSwitch>
                </el-col>
              </el-row>

            </div>


          </el-tab-pane>
        </el-tabs>
      </el-col>

    </el-row>


  </div>
</template>
