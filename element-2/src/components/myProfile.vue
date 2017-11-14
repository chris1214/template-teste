<script>
import myContainer from './myContainer'
import myActionsButton from './myActionsButton'
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
      myContainer,
      myActionsButton,
    }
}



</script>
<template>
  <div>
    <h1>Profile</h1>
    <myContainer>
      <el-row>
        <el-col :span="24">
          <h4>User</h4>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :md="4" :xs="24" :sm="4">
          <div class="icon-user text-align-center">
            <i class="el-icon-picture"></i>
          </div>
        </el-col>
        <el-col :md="18" :xs="24" :sm="18">
          <p id="name">
            <b>Name: </b>
            Christopher
          </p>
          <p id="username">
            <b>User name: </b>
            Chris
          </p>
          <p id="phone">
            <b>Phone: </b>
            123456789
          </p>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-button type="primary" size="small">
            Change password
          </el-button>
        </el-col>
      </el-row>
    </myContainer>
  </div>
</template>
<style scoped>
  .text-align-center {
    text-align: center;
  }
  .icon-user {
    font-size: 80px;
    margin-top: 10px;
    margin-bottom: 0px;
    font-weight: 300;
    line-height: 1.1;
    color: #444;
  }
</style>
