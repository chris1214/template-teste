<script>
export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };

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
              <strong>Label:</strong>
              <p>Conteudo</p>
            </el-col>
          </el-row>

          <br><br>
          <br><br>

          <el-button @click="dialogVisible = true">click to open the Dialog</el-button>


          <el-dialog
            title="Confirmar ?"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <span>Eu sou o corpo</span>
            <span>Eu sou o corpo</span>
            <span>Eu sou o corpo</span>
            <span>Eu sou o corpo</span>
            <span>Eu sou o corpo</span>
            <span>Eu sou o corpo</span>

            <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                </span>
          </el-dialog>
        </el-col>
      </el-row>
    </el-card>


  </div>
</template>
