import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilteringParam } from 'src/app/youtube/services/search-responce.service';

@Injectable({
  providedIn: 'root',
})
export class SearchAndFilteringService {
  public isShowSubject = new Subject<boolean>();

  public isShow:boolean = false;

  public filteringWord = new Subject<string>();

  // filteringWord: string = '';

  public filteringParam = new Subject<FilteringParam>();
  // {
  //   type: '',
  //   isReverse: false,
  // };

  // searchValue: string = '';

  public switchShowFilteringBlock() {
    this.isShow = !this.isShow;
    this.isShowSubject.next(this.isShow);
  }

  public setFilteringWord(str: string) {
    this.filteringWord.next(str);
  }

  public setFilteringParam(param: FilteringParam) {
    this.filteringParam.next(param);
  }
}
