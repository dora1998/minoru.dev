<template>
  <section class="container">
    <div v-for="p in posts" :key="p.id" class="post">
      <div class="ogp-image">
        <img v-if="p.image" :src="p.image" :alt="p.title" />
        <img v-else src="~/assets/imgs/ogp_noimage.png" :alt="p.title" />
      </div>
      <div class="post-detail">
        <a :href="p.url" class="link">
          <h3 v-text="p.title"></h3>
        </a>
        <span class="published" v-text="p.datePublished"></span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'

import { IPost } from '~/entities/interfaces'
import { VStoreComponent } from '@/utils/vuex-simple'

@Component({})
export default class RecentPosts extends VStoreComponent {
  public mounted() {
    this.store.posts.fetch()
  }

  get posts(): IPost[] {
    return this.store.posts.posts
  }
}
</script>

<style lang="scss" scoped>
.post {
  @include mq(md) {
    display: grid;
    grid-gap: 0 16px;
    grid-template: 'image body' 1fr / 180px 1fr;
  }

  @include card-layout;

  margin-bottom: 8px;

  > .ogp-image {
    @include mq(md) {
      grid-area: image;
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
      grid-area: body;
    }

    > .link {
      text-decoration: none;
    }
  }
}
</style>
