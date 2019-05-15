export interface IAccount {
  name: string
  link: string
  icon: string | string[]
  color: string
}

export interface IAttribution {
  name: string
  icon?: string | string[]
  text?: string
  link?: string
}

export interface IMenuItem {
  text: string
  name: string
}

export interface IPost {
  id: string
  url: string
  title: string
  summary: string
  image: string
  datePublished: string
}

export interface ISkillSet {
  name: string
  body: string
  image: string
}

export interface IWork {
  id: string
  name: string
  createdAt: string
  website: string
  github: string
  body: string
  images: string[]
  order: number
}
