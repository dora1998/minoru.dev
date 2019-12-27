const contentful = require('contentful')

class ContentfulAdapter {
  config = {
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
  }

  client: any

  createClient() {
    return contentful.createClient(this.config)
  }

  async fetchEntries(contentType: string, order?: string): Promise<any[]> {
    if (!this.client) this.client = this.createClient()
    const res = await this.client.getEntries({
      content_type: contentType,
      order
    })
    return res.items.map((item: any) => item.fields)
  }
}

export default new ContentfulAdapter()
