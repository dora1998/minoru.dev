import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'

import store from '@/store/store'
import { IPost } from '~/entities/interfaces'

export interface IPostsState {
  posts: IPost[]
}

@Module({ dynamic: true, store, name: 'posts', namespaced: true })
class Posts extends VuexModule implements IPostsState {
  posts: IPost[] = []

  @Mutation
  public SET_POSTS(posts: IPost[]) {
    this.posts = posts
  }

  @Action({})
  public fetchPosts() {}
}

export const storePosts = getModule(Posts)
