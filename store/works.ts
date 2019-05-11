import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'

import store from '@/store/store'
import { IWork } from '~/entities/interfaces'
import Contentful from '~/interfaces/Contentful'

export interface IWorksState {
  works: IWork[]
}

@Module({ dynamic: true, store, name: 'posts', namespaced: true })
class Works extends VuexModule implements IWorksState {
  works: IWork[] = []

  @Mutation
  public SET_WORKS(works: IWork[]) {
    this.works = works
  }

  @Action({})
  public async fetch() {
    const res = await Contentful.fetchWorks()
    this.SET_WORKS(res)
  }
}

export const storeWorks = getModule(Works)
