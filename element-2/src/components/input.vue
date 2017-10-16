<script>
    export default{
      props: ["label","placeholder"],
        data: function(){
        },
    }
</script>
<template>
  <div>
    <label>{{ label }} </label>
      <el-input
        :placeholder="placeholder"
      />
  </div>
</template>
