<template>
  <section class="container">
    <div>
      <h1 class="title">プロフィール</h1>
      <Profile />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Profile from '~/components/Profile.vue'
// import { MetaInfo } from 'vue-meta'

@Component({
  // head(): MetaInfo {
  //   return {
  //     titleTemplate: '',
  //     title: 'サイト名'
  //   }
  // },

  components: {
    Profile
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
h1 {
  border-bottom: 1px solid #ccc;
  margin-bottom: 8px;
}
</style>
