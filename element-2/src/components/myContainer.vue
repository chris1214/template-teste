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
          console.log('true padding');
          return 'myPadding';

        } else {
          console.log('false padding');
          return 'container';
        }
      },
      _backgroundColorWhite: function () {
        if(this.backgroundColorWhite){
          console.log('true background');
          return 'myBackground';

        } else {
          console.log('false background');
          return 'container';
        }
      }
    },
    components:{
    }
}

</script>
<template>
    <div class="container" :class="">
      <slot></slot>
    </div>
</template>
<style scoped>
.myBackground {
    background-color: transparent !important;
}
.myPadding {
  padding: 0;
}
.container {
  margin-bottom: 15px;
  padding: 15px;
  background-color: white;
}

</style>
