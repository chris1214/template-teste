<script>
    export default {
      data() {
        return {

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
            <el-card class="box-card">

                <el-form label-position="top">
                  <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="Name">
                        <el-input
                          id="name"
                        />
                      </el-form-item>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="username">
                        <el-input
                          id="username"
                        />
                      </el-form-item>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="Email">
                        <el-input
                          id="email"
                        />
                      </el-form-item>
                    </div>

                  </div>

                  <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="Telefone">
                        <el-input
                          id="phone"
                        />
                      </el-form-item>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="Senha">
                        <el-input
                          id="password"
                        />
                      </el-form-item>
                    </div>

                  </div>

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
