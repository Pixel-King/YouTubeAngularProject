import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilteringParamService {
  public isSortByDate: String;

  public isSortByViewers: String;

  public isSortByWordOrSentence: String;

  public isShowSubject = new Subject<boolean>();

  public isShow:boolean = false;

  public switchShowFilteringBlock() {
    this.isShow = !this.isShow;
    this.isShowSubject.next(this.isShow);
  }
}
