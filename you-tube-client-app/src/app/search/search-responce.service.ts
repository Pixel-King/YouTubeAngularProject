import { Injectable } from '@angular/core';
import { SearchItem } from './search-item.model';
import { Subject } from 'rxjs';
import { data } from './data/yuoTubeApiRes';

export type FilteringType = '' | 'date' | 'view';

export interface FilteringParam {
  type: FilteringType,
  isReverse: Boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SearchResponceService {
  public videos = new Subject<SearchItem[]>();

  filteringWord: string = '';

  filteringParam: FilteringParam = {
    type: '',
    isReverse: false,
  };

  searchValue: string = '';

  setSearchResponce() {
    let filteredVideos: SearchItem[] = data.items.map(el => new SearchItem(el)).filter((video: SearchItem) => `${video.description} ${video.title}`.includes(this.filteringWord));

    if (this.filteringParam.type === 'date' ) {
      this.videos.next(filteredVideos.sort((firstVideo: SearchItem, secondVideo: SearchItem) => {
        if (this.filteringParam.isReverse) {
          return secondVideo.date.getTime() - firstVideo.date.getTime();
        }
        return firstVideo.date.getTime() - secondVideo.date.getTime();
      }));
    }
    if (this.filteringParam.type === 'view' ) {
      this.videos.next(filteredVideos.sort((firstVideo: SearchItem, secondVideo: SearchItem) => {
        if (this.filteringParam.isReverse) {
          return +secondVideo.statistics.viewCount - +firstVideo.statistics.viewCount;
        }
        return +firstVideo.statistics.viewCount - +secondVideo.statistics.viewCount;
      }));
    }
    this.videos.next(filteredVideos);
  }
}
