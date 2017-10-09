<script>
    export default{
      props: ["label","placeholder"],
        data: function(){
        },
    }
</script>
<template>
  <div>
    <el-form-item :label="label">
      <el-input
        :placeholder="placeholder"
      />
    </el-form-item>
  </div>
</template>
