import { Pipe, PipeTransform } from '@angular/core';
import { FilteringParam } from '../services/search-responce.service';
import { Router } from '@angular/router';

@Pipe({
  name: 'searchResultFilter',
})
export class SearchResultFilterPipe implements PipeTransform {

  constructor(private router: Router) {}

  transform(value: SearchItem[], filteringWord: string, filteringParam: FilteringParam): SearchItem[] {
    let filteredVideos: SearchItem[] = value.filter((video: SearchItem) =>
      `${video.description} ${video.title}`.toLowerCase().includes(filteringWord.toLowerCase()));

    if (filteringParam.type === 'date' ) {
      filteredVideos = filteredVideos.sort((firstVideo: SearchItem, secondVideo: SearchItem) => {
        if (filteringParam.isReverse) {
          return secondVideo.date.getTime() - firstVideo.date.getTime();
        }
        return firstVideo.date.getTime() - secondVideo.date.getTime();
      });
    }
    if (filteringParam.type === 'view' ) {
      filteredVideos = filteredVideos.sort((firstVideo: SearchItem, secondVideo: SearchItem) => {
        if (filteringParam.isReverse) {
          return +secondVideo.statistics.viewCount - +firstVideo.statistics.viewCount;
        }
        return +firstVideo.statistics.viewCount - +secondVideo.statistics.viewCount;
      });
    }
    if (!filteredVideos.length) {
      this.router.navigate(['**']);
    }
    return filteredVideos;
  }

}
