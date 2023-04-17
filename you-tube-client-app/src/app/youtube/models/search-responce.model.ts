export interface SearchResponce {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: PageInfo
  items: VideoSearchres[]
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface VideoSearchres {
  kind: string
  etag: string
  id: Id
  snippet: Snippet
}

export interface Id {
  kind: string
  videoId: string
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface Thumbnails {
  default: Quality
  medium: Quality
  high: Quality
}

export interface Quality {
  url: string
  width: number
  height: number
}
