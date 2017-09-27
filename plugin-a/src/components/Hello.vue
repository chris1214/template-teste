<template>
  <div class="hello">
    <meuComponent />
    <br>
    <meuBotao />
  </div>
</template>

<script>
import meuComponent from './meuComponent'
import meuBotao from './meuBotao'
export default {
  data () {
    return {
    }
  },
  components: {
    meuComponent,
    meuBotao
  }
}
</script>
