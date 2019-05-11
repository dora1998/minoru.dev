<template>
  <section class="container">
    <div>
      <h1 class="title">これまでの制作物</h1>
      <WorkList />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import WorkList from '~/components/WorkList.vue'

@Component({
  components: {
    WorkList
  }
})
export default class Works extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;
}
</style>
