<script>
export default{
    props: ["padding15px", "backgroundColorWhite"],
    data(){
        return{
        }
    },
    computed: {
      _padding15px: function () {
        if(this.padding15px){
          console.log('true');
          return 'my-padding';

        } else {
          console.log('false');
          return '';
        }
      },
      _backgroundColorWhite: function () {
        if(this.backgroundColorWhite){
          console.log('true');
          return 'my-background';

        } else {
          console.log('false');
          return '';
        }
      }
    },
    components:{
    }
}

</script>
<template>
    <div class="container" :class="_padding15px">
      <slot></slot>
    </div>
</template>
<style scoped>
.my-background {
  background-color: transparent !important;
}
.my-padding {
  padding: 0 !important;
}
.container {
  margin-bottom: 15px;
  padding: 15px;
  background-color: white;
}

</style>
