<script>
    export default{
      props: ["label"],
        data: function(){
        }
    }
</script>
<template>
  <div>
    <strong>
      {{ label }} &nbsp;
    </strong>
    <slot></slot>
  </div>
</template>
<style>

</style>
