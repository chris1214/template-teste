<script>
export default{
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
    components:{
    }
}


</script>
<template>
  <div>
    <el-container>
      <el-main>
        <myContainer cardPosition="10% 30%;">
          <h1>Login</h1>
          <el-form>
            <el-form-item label="Email">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="12">
                  <el-button type="primary">Login</el-button>
                </el-col>
                <el-col :span="12" style="text-align: right;">
                  <el-button type="text"><a href="#/creat">Register</a></el-button>
                  <el-button type="text"><a href="#/forgotPassword">forgot password</a></el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </myContainer>
      </el-main>
    </el-container>
  </div>
</template>
<style>
</style>
