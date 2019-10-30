import { Action, Mutation, State } from 'vuex-simple'
import { IPost } from '@/entities/interfaces'

import PostRepository from '~/repositories/PostRepository'

export interface IPostsState {
  posts: IPost[]
}

export class PostsModule {
  @State() posts: IPost[] = []

  @Mutation()
  public SET_POSTS(posts: IPost[]) {
    this.posts = posts
  }

  @Action()
  public async fetch() {
    const posts = await PostRepository.fetch()
    this.SET_POSTS(posts)
  }
}
