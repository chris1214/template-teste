<script>
    export default{
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
<template>
  <div>
    <slot class="myContainer"></slot>
  </div>
</template>
<style>
.myContainer {
  min-height: 100%;
  max-height: 100%;
  height: 100%;
  padding-left: 64px;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
}
</style>
