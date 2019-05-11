<template>
  <section class="container">
    <div>
      <h1>プロフィール</h1>
      <Profile />
      <h1>スキル</h1>
      <SkillSet />
      <h1>最近の投稿</h1>
      <RecentPosts />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Profile from '~/components/Profile.vue'
import SkillSet from '~/components/SkillSet.vue'
import RecentPosts from '~/components/RecentPosts.vue'
// import { MetaInfo } from 'vue-meta'

@Component({
  // head(): MetaInfo {
  //   return {
  //     titleTemplate: '',
  //     title: 'サイト名'
  //   }
  // },

  components: {
    Profile,
    SkillSet,
    RecentPosts
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;
}
</style>
