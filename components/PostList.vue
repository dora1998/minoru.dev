<template>
  <section class="container">
    <div v-for="p in posts" :key="p.id" class="post">
      <div class="ogp-image">
        <img :src="p.image" />
      </div>
      <div class="post-detail">
        <a :href="p.url" class="link">
          <h3 v-text="p.title" />
        </a>
        <span class="published" v-text="p.datePublished" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { IPost } from '~/entities/interfaces'
import { storePosts } from '~/store/-posts'

@Component({})
export default class RecentPosts extends Vue {
  public mounted() {
    storePosts.fetch()
  }

  get posts(): IPost[] {
    return storePosts.posts
  }
}
</script>

<style lang="scss" scoped>
.post {
  @include mq(md) {
    display: grid;
    grid-template: 1fr / 180px 1fr;
  }

  @include card-layout;

  column-gap: 16px;

  > .ogp-image {
    @include mq(md) {
      grid-column: 1;
      margin-bottom: 0;
    }

    margin-bottom: 16px;
    text-align: center;

    > img {
      max-width: 100%;

      @include mq(md) {
        max-height: 100px;
      }
    }
  }

  > .post-detail {
    @include mq(md) {
      grid-column: 2;
    }
  }
}
</style>
