import store from '@/store/-store'
import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'

import { IPost } from '~/entities/interfaces'
import PostRepository from '~/repositories/PostRepository'

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
  public async fetch() {
    const posts = await PostRepository.fetch()
    this.SET_POSTS(posts)
  }
}

export const storePosts = getModule(Posts)
