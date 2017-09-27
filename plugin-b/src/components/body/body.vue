<script>
    export default {
      data() {
        return {
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
          value: '',
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
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
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
            <el-collapse>
              <el-collapse-item title="Filtros">

                <el-form label-position="top">
                  <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="Name">
                        <el-input
                          placeholder="Name"
                          id="name"
                        />
                      </el-form-item>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item label="select">
                        <el-select v-model="value" placeholder="Select">
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
                      <el-form-item label="Email">
                        <el-input
                          placeholder="Email"
                          id="email"
                        />
                      </el-form-item>
                    </div>

                  </div>

                  <div class="row">

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item>
                        <el-input
                          placeholder="Telefone"
                          id="phone"
                        />
                      </el-form-item>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item>
                        <el-input
                          placeholder="Senha"
                          id="password"
                        />
                      </el-form-item>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-4">
                      <el-form-item>
                        <el-input
                          placeholder="Repita a Senha"
                          id="re-password"
                          type="password"
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

        <br><br>

        <el-row>
          <el-col :span="24">
            <el-tabs type="border-card">
              <el-tab-pane label="User">
                <div class="tab-body">

                  <el-row>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo Conteudo Conteudo Conteudo Conteudo Conteudo </p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo Conteudo Conteudo Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo Conteudo Conteudo Conteudo Conteudo </p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo Conteudo Conteudo Conteudo Conteudo </p>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                  </el-row>

                </div>
              </el-tab-pane>
              <el-tab-pane label="Config">
                <div class="tab-flex">
                  <el-row>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                  </el-row>

                  <el-row>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                    <el-col :span="4">
                      <strong>Label:</strong>
                      <p>Conteudo</p>
                    </el-col>
                  </el-row>

                </div>

              </el-tab-pane>
              <el-tab-pane label="Role">
                <div class="tab-body">
                  Role
                </div>
              </el-tab-pane>
              <el-tab-pane label="Task">
                <div class="tab-body">
                  Task
                </div>
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>

        <br><br>


        <div class="row">
          <div class="col-md-12">

            <template>
              <el-table
                stripe
                class="tabela"
                :data="tableData"
                border>
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
            </template>

          </div>
        </div>

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
  padding: 70px 15px 0px 10px;
}






</style>
