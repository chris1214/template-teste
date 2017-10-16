<script>
import detailsShow from "../../components/detailsShow"
export default {
  components: {
    detailsShow
  },
  data() {
    return {

    }
  }
}



</script>

<template>
  <div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="24">

          <h3>show-body</h3>
          <br><br>

          <el-row>
            <el-col :span="4">
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
            </el-col>
          </el-row>

          <br><br>
          <br><br>

          <h3>show-body-collum</h3>
          <br><br>

          <el-row>
            <el-col :span="5">
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
            </el-col>

            <el-col :span="5">
                <detailsShow label="LabelMaior:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
                <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
                <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
                <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
            </el-col>

            <el-col :span="5">
              <detailsShow label="LabelMaior:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-label-bold-colum text-aling-and"/>
            </el-col>

            <el-col :span="5">
              <div class="show-label-colum">
                <p>Label:</p>
                <p>LabelMaior:</p>
                <p>Label:</p>
                <p>LabelMaior:</p>
              </div>
              <div>
                <p>Conteudo</p>
                <p>Conteudo</p>
                <p>Conteudo</p>
                <p>Conteudo</p>
              </div>
            </el-col>
          </el-row>

          <br><br>

          <el-row>
            <el-col span="5">
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" />
            </el-col>

            <el-col span="5">
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-inline2"/>
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-inline2"/>
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-inline2"/>
              <detailsShow label="Label:" placeholder="Conteudo" myClass="show-label-bold" containerClass="show-inline2"/>
            </el-col>

            <el-col span="5">

              <div class="show-inline2">
                <p class="show-label-bold">Label:</p>
                <p class="show-value">Conteudo</p>
              </div>

              <div class="show-inline2">
                <p class="show-label-bold">Label:</p>
                <p class="show-value">Conteudo</p>
              </div>

              <div class="show-inline2">
                <p class="show-label-bold">Label:</p>
                <p class="show-value">Conteudo</p>
              </div>

              <div class="show-inline2">
                <p class="show-label-bold">Label:</p>
                <p class="show-value">Conteudo</p>
              </div>

            </el-col>

            <el-col span="5">

            </el-col>
          </el-row>

          <br><br>
          <br><br>

          <h3>show-inline</h3>
          <br><br>

          <el-row>
            <el-col :span="4">

              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>

            </el-col>
          </el-row>


        </el-col>
      </el-row>
    </el-card>

    <br><br>

    <el-card class="box-card">
      <el-row>
        <el-col :span="24">

          <h3>show-body</h3>
          <br><br>

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

          <br><br>
          <br><br>

          <h3>show-inline</h3>
          <br><br>

          <el-row>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="show-inline">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>
          </el-row>


        </el-col>
      </el-row>
    </el-card>

    <br><br>

    <el-card class="box-card">
      <el-row>
        <el-col :span="24">

          <h3>show-inline-grid</h3>
          <br><br>
          <el-row>

            <el-col :span="6">
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-inline-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

          </el-row>

          <br><br>
          <br><br>

          <h3>show-collum-grid</h3>
          <br><br>
          <el-row>

            <el-col :span="6">
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

            <el-col :span="6">
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
              <div class="show-collum-grid">
                <strong>Label:</strong>
                <p>Conteudo</p>
              </div>
            </el-col>

          </el-row>

        </el-col>
      </el-row>
    </el-card>


  </div>
</template>

<!--<style>
/* Form Show */

/* label + valor em linha */
.show-inline {
  display: inline-flex !important;
  min-height: 34px;
}
.show-inline > strong {
  margin-right: 5px !important;
}
/* label + valor em linha */

/* label + valor em colunas */
.show-inline-grid {
  display: inline-flex;
  min-width: 100%;
  min-height: 34px;
  padding: 0 10px;

}
.show-inline-grid > strong{
  margin-right: 10px;
}
/* label + valor em colunas */

/* label em cima, valor em baixo em colunas */
.show-collum-grid {
  min-width: 100%;
  min-height: 36px;
  padding: 0 10px;
}
/* label em cima, valor em baixo em colunas */
.show-inline2 {
  display: inline-flex !important;
  min-height: 34px;
  width: 100%;
}
.show-label-bold {
  font-weight: bold;
  margin-bottom: 0;
}
.show-label{
  margin-bottom: 0;
}
.show-value {
  padding-left: 10px;
}
.text-aling-and {
  text-align: end;
}
.show-label-bold-colum {
  font-weight: bold;
  display: inline-block;
}
.show-label-colum {
  display: inline-block;
}
.show-label-colum ~ div {
  padding-left: 10px;
  display: inline-block;
}
.show-label-bold-colum ~ div {
  padding-left: 10px;
  display: inline-block;
}

/* Form Show */



</style>-->

