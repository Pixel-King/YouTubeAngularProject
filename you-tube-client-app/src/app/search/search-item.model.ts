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
  public thumbnail: Thumbnails;

  public statistics: Statistics;

  public title: String;

  public description: String;

  public date: Date;

  public borderColor: String;

  constructor(videInf: VideoInf) {
    this.thumbnail = videInf.snippet.thumbnails;
    this.statistics = videInf.statistics;
    this.title = videInf.snippet.title;
    this.description = videInf.snippet.description;
    this.date = new Date(videInf.snippet.publishedAt);
    this.borderColor = this.getBorderColor();
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

  private getBorderColor(): string {
    const currentDate = new Date();

    const monthsPassed = (currentDate.getFullYear() - this.date.getFullYear()) * 12 +
    (currentDate.getMonth() - this.date.getMonth());

    const daysPassed  = Math.floor(currentDate.getTime() - this.date.getTime() / (1000 * 60 * 60 * 24));

    if (monthsPassed >= 6 ) return 'red';
    if (monthsPassed >= 1 ) return 'yellow';
    if (daysPassed <= 7 )  return 'blue';
    return 'green';
  }
}
