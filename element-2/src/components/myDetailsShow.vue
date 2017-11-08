<script>
export default{
  props: ["label", "value", "format", "labelWidth"],
  computed: {
      _labelWidth: function() {
        return "width: " + this.labelWidth + 'px;'
      },
      Format: function() {
        if(this.format === '') {
          return "showCollumGrid"
        }
        if (this.format === 'collum'){
          return "showCollumGrid"
        }
        if (this.format === 'inline'){
          return "showInlineGrid"
        } else {
          return "showCollumGrid"
        }
      }
    }
}
</script>
<template>
  <span :class="Format">
    <b :style="_labelWidth">
      <slot name="label">{{ label }}</slot>
    </b>
    <p>
      <slot name="value">{{ value }}</slot>
    </p>
  </span>
</template>
<style scoped>
/* Form Show */
p {
  margin: 0;
}
/* label + valor em colunas */
.showInlineGrid {
  display: inline-flex;
  min-width: 100%;

}
/* label + valor em colunas */

/* label em cima, valor em baixo em colunas */
.showCollumGrid {
  min-height: 36px;
}
/* Form Show */


</style>

