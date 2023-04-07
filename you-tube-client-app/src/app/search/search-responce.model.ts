import { SearchItem } from './search-item.model';
import { YouTubeApiRes } from './you-tube-api-responce.model';

export class SearchResponce {
  private videos: SearchItem[];

  constructor(data: YouTubeApiRes) {
    this.videos = data.items.map((res) => new SearchItem(res));
  }

  getSearchResult(): SearchItem[] {
    return this.videos;
  }
}
