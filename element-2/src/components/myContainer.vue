<script>
export default{
    props: ["padding", "card", "cardPosition"],
    data(){
        return{
        }
    },
    computed: {
      _cardPosition: function() {
        return "margin: " + this.cardPosition
      },
      myCard: function() {
        if (this.card === ''){
          return false;
        }
        if (this.card === false){
            return true;
        } else {
          return false;
        }
      },
      myPadding: function() {
        if (this.padding === ''){
          return false;
        }
        if (this.padding === false){
            return true;
        } else {
          return false;
        }
      }
    },
    components:{
    }
}

</script>
<template>
    <div class="container" v-bind:class="{myBackground: myCard, myPadding: myPadding }" :style="_cardPosition ">
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
