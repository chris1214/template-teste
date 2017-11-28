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
        <myContainer cardPosition="0 25%">
          <h1>Creat</h1>
          <el-form>
            <el-form-item label="Name">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item label="Repeat the password">
              <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-row>
                <el-col :span="12">
                  <el-button type="primary">Save/Creat</el-button>
                </el-col>
                <el-col :span="12" style="text-align: right;">
                  <el-button type="text"><a href="#/">Back to login</a></el-button>
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
