export interface VideosResponce {
  kind: string
  etag: string
  items: VideoVideosRes[]
  pageInfo: PageInfo
}

export interface VideoVideosRes {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  statistics: Statistics
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: Localized
  defaultAudioLanguage?: string
}

export interface Thumbnails {
  default: Quality
  medium: Quality
  high: Quality
  standard: Quality
  maxres: Quality
}

export interface Quality {
  url: string
  width: number
  height: number
}

export interface Localized {
  title: string
  description: string
}

export interface Statistics {
  viewCount: string
  likeCount: string
  favoriteCount: string
  commentCount: string
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}
