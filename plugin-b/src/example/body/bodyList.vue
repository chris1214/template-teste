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
