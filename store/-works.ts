import store from '@/store/-store'
import {
  Mutation,
  Action,
  VuexModule,
  getModule,
  Module
} from 'vuex-module-decorators'

import { IWork } from '~/entities/interfaces'
import WorkRepository from '@/repositories/WorkRepository'

export interface IWorksState {
  works: IWork[]
}

@Module({ dynamic: true, store, name: 'works', namespaced: true })
class Works extends VuexModule implements IWorksState {
  works: IWork[] = []

  @Mutation
  public SET_WORKS(works: IWork[]) {
    this.works = works
  }

  @Action({})
  public async fetch() {
    const res = await WorkRepository.fetch()
    this.SET_WORKS(res)
  }
}

export const storeWorks = getModule(Works)
