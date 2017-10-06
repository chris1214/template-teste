<script>
  import componentFilter from "./exampleTemplate/filter"
  import componentTable from "./exampleTemplate/table"
    export default {
    components: {
      componentFilter,
      componentTable
    },
      data() {
        return {

        }
      }
    }

</script>

<template>
  <div>

    <componentFilter/>

    <br><br>

    <componentTable/>

  </div>
</template>
<style>

.corpo {
  margin-left: 65px;
  z-index: -1;
}

.conteudo {
  padding: 70px 15px 0px 10px;
}

</style>
