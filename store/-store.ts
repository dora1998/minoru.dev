import Vue from 'vue'
import Vuex from 'vuex'

import { IPostsState } from '@/store/-posts'
import { IWorksState } from '@/store/-works'

Vue.use(Vuex)

export interface State {
  posts: IPostsState
  works: IWorksState
}
export default new Vuex.Store<State>({})
