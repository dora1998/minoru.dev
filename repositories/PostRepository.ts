import * as moment from 'moment'
import FeedAdapter from '@/adapters/FeedAdapter'
import { IPost } from '@/entities/interfaces'

class PostRepository {
  async fetch() {
    const postsJson = await FeedAdapter.fetch()

    const JSON_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ'
    const DISPLAY_FORMAT = 'YYYY/MM/DD'
    const posts = postsJson.map<IPost>(
      (item): IPost =>
        <IPost>{
          id: item.id,
          url: item.url,
          title: item.title,
          summary: item.summary,
          image: item.image,
          datePublished: moment(item.date_published, JSON_FORMAT).format(
            DISPLAY_FORMAT
          )
        }
    )
    return posts
  }
}
export default new PostRepository()
