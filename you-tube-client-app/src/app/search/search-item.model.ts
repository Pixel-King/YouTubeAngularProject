import {
  Statistics,
  Thumbnails,
  VideoInf,
} from './you-tube-api-responce.model';

// eslint-disable-next-line @typescript-eslint/naming-convention
type statType =
  | 'viewCount'
  | 'likeCount'
  | 'dislikeCount'
  | 'favoriteCount'
  | 'commentCount';

// eslint-disable-next-line @typescript-eslint/naming-convention
type thumbnailsQuality = 'default' | 'medium' | 'high' | 'standard' | 'maxres';

export class SearchItem {
  private thumbnail: Thumbnails;

  private statistics: Statistics;

  private title: String;

  constructor(videInf: VideoInf) {
    this.thumbnail = videInf.snippet.thumbnails;
    this.statistics = videInf.statistics;
    this.title = videInf.snippet.title;
  }

  getTitle(): String {
    return this.title ;
  }

  getThumbnailUrl(quality: thumbnailsQuality): String {
    return this.thumbnail[quality].url;
  }

  getStatistic(type: statType): String {
    return this.statistics[type];
  }
}
