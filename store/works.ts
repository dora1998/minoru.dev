import { Action, Mutation, State } from 'vuex-simple'

import { IWork } from '@/entities/interfaces'
import WorkRepository from '@/repositories/WorkRepository'

export interface IWorksState {
  works: IWork[]
}

export class WorksModule {
  @State() works: IWork[] = []

  @Mutation()
  public SET_WORKS(works: IWork[]) {
    this.works = works
  }

  @Action()
  public async fetch() {
    const res = await WorkRepository.fetch()
    this.SET_WORKS(res)
  }
}
