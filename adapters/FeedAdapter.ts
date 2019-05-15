import axios from 'axios'

interface IPostJson {
  id: string
  url: string
  title: string
  summary: string
  image: string
  // eslint-disable-next-line camelcase
  date_published: string
}

class FeedAdapter {
  async fetch(): Promise<IPostJson[]> {
    if (!process.env.FEED_URL)
      return new Promise<IPostJson[]>(resolve => resolve([]))
    const res = await axios.get(process.env.FEED_URL)
    return res.data.items as IPostJson[]
  }
}

export default new FeedAdapter()
