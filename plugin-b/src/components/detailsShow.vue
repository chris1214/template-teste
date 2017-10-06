<script>
    export default{
      props: ["label", "placeholder", "myClass", "containerClass"],
        data: function(){
        }
    }


</script>
<template>
  <span :class="containerClass">
    <p :class="myClass">
      {{ label }} &nbsp;
    </p>
    <p>
      {{ placeholder }}
    </p>
  </span>
</template>
<style>

</style>
