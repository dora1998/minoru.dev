<template>
  <font-awesome-icon :icon="icon" :size="size" fixed-width />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class IconButton extends Vue {
  @Prop([String, Array]) readonly icon!: string | string[]
  @Prop(String) readonly size!: string
}
</script>

<style lang="scss" scoped></style>
