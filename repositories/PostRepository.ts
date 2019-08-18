import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import FeedAdapter from '@/adapters/FeedAdapter'
import { IPost } from '@/entities/interfaces'

dayjs.extend(customParseFormat)

class PostRepository {
  async fetch() {
    const postsJson = await FeedAdapter.fetch()

    const JSON_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ'
    const DISPLAY_FORMAT = 'YYYY/MM/DD'
    return postsJson.map<IPost>(
      (item): IPost =>
        <IPost>{
          id: item.id,
          url: item.url,
          title: item.title,
          summary: item.summary,
          image: item.image,
          datePublished: dayjs(item.date_published, JSON_FORMAT).format(
            DISPLAY_FORMAT
          )
        }
    )
  }
}
export default new PostRepository()
