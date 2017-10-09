<script>
    export default{
        data: function(){
        }
    }

</script>
<template>
  <div class="corpo">
    <div class="conteudo">

      <el-row>
        <el-col :span="24">
          <slot name="title"></slot>
        </el-col>
      </el-row>

      <slot>

      </slot>
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
