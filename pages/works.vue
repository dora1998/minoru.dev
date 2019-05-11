<template>
  <section class="container">
    <div>
      <h1 class="title">これまでの制作物</h1>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { storeWorks } from '~/store/works'

@Component({})
export default class Works extends Vue {
  public mounted() {
    storeWorks.fetch()
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;
}
</style>
