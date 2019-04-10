<template lang="pug">
  section.container
    div
      h1.title
        | minoru.dev
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 1px solid #ccc;
}
</style>
