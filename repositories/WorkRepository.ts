import ContentfulAdapter from '@/adapters/ContentfulAdapter'

class WorkRepository {
  public fetch() {
    return ContentfulAdapter.fetchWorks()
  }
}

export default new WorkRepository()
