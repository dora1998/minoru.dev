<template>
  <main class="container">
    <section>
      <h1 class="title">これまでの制作物</h1>
      <WorkList />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MetaInfo } from 'vue-meta'

import WorkList from '~/components/WorkList.vue'

@Component({
  head(): MetaInfo {
    return {
      title: 'Works'
    }
  },

  components: {
    WorkList
  }
})
export default class Works extends Vue {}
</script>

<style lang="scss" scoped>
@include page-styles;
</style>
