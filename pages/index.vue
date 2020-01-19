<template>
  <main class="container">
    <section>
      <h1 class="title">プロフィール</h1>
      <Profile />
    </section>
    <section>
      <h1 class="title">活動履歴</h1>
      <ActivityList />
    </section>
    <section>
      <h1 class="title">最近の投稿</h1>
      <PostList />
    </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { MetaInfo } from 'vue-meta'
import Profile from '~/components/Profile.vue'
import SkillSet from '~/components/SkillSet.vue'
import ActivityList from '~/components/ActivityList.vue'
import PostList from '~/components/PostList.vue'

@Component({
  head(): MetaInfo {
    return {
      titleTemplate: '',
      title: "Minoru's Portfolio"
    }
  },

  components: {
    Profile,
    SkillSet,
    ActivityList,
    PostList
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
@include page-styles;
</style>
