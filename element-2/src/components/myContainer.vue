<script>
export default{
    props: ["disablePadding", "disableCard"],
    data(){
        return{
        }
    },
    computed: {
    },
    components:{
    }
}

</script>
<template>
    <div class="container" v-bind:class="{myBackground: disableCard, myPadding: disablePadding }">
      <slot></slot>
    </div>
</template>
<style scoped>
.myBackground {
    background-color: transparent !important;
}
.myPadding {
  padding: 0 !important;
}
.container {
  margin-bottom: 15px;
  padding: 15px;
  background-color: white;
}

</style>
