<script>
    export default {
      data() {
        return {
          value1: true
        }
      }
    }






</script>

<template>
  <div>
    <div class="corpo">
      <div class="conteudo">

        <el-row>
          <el-col :span="24">
            <h2>Usuário</h2>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <el-tabs type="border-card">

              <el-tab-pane label="Detalhes">

                <div class="tab-body">

                  <el-row>
                    <el-col :span="4">
                      <strong>Name:</strong>
                      <p>meu nome é</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>username:</strong>
                      <p>Seu nome é</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Email:</strong>
                      <p>abobrinha@hotmail.com</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Telefone:</strong>
                      <p>123456789</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Habilitado?</strong>
                      <p>Sim</p>
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
                      <strong>Automóveis:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                    <el-col :span="4">
                      <strong>Fotografia:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                    <el-col :span="4">
                      <strong>Gourmet:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                    <el-col :span="4">
                      <strong>Música:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
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
                      <strong>Estilos musicais:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
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
                      <strong>Form crud:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                    <el-col :span="4">
                      <strong>Form custom:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                    <el-col :span="4">
                      <strong>Form dashboard:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                    <el-col :span="4">
                      <strong>Música:</strong>
                      <el-switch
                        v-model="value1"
                        on-text=""
                        off-text="">
                      </el-switch>
                    </el-col>
                  </el-row>

                </div>


              </el-tab-pane>
            </el-tabs>
          </el-col>

        </el-row>


      </div>
    </div>
  </div>
</template>
<style>

.corpo {
  margin-left: 65px;
  z-index: -1;
}

.conteudo {
  padding: 70px 10px 0px 10px;
}






</style>
