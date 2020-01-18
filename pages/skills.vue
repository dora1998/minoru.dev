<template>
  <main>
    <h1 class="title">スキル</h1>
    <SkillSet />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MetaInfo } from 'vue-meta'
import SkillSet from '~/components/SkillSet.vue'

@Component({
  head(): MetaInfo {
    return {
      title: 'Skills'
    }
  },

  components: {
    SkillSet
  }
})
export default class Skills extends Vue {}
</script>

<style lang="scss" scoped>
@include page-styles;
</style>
