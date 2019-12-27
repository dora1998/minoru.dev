import ContentfulAdapter from '@/adapters/ContentfulAdapter'
import { IWork } from '@/entities/interfaces'

class WorkRepository {
  public async fetch(): Promise<IWork[]> {
    if (!process.env.CTF_WORK_TYPE_ID) return []
    const res = await ContentfulAdapter.fetchEntries(
      process.env.CTF_WORK_TYPE_ID,
      'fields.order'
    )
    return res ? (res as IWork[]) : []
  }
}

export default new WorkRepository()
