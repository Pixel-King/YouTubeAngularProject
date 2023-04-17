import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderParam } from '../model/order-parameter.model';

@Injectable({
  providedIn: 'root',
})
export class SearchAndFilteringService {
  public isShowSubject = new Subject<boolean>();

  public isShow:boolean = false;

  public filteringWord = new Subject<string>();

  // filteringWord: string = '';

  public orderParam = new Subject<OrderParam>();

  public switchShowFilteringBlock() {
    this.isShow = !this.isShow;
    this.isShowSubject.next(this.isShow);
  }

  public setFilteringWord(str: string) {
    this.filteringWord.next(str);
  }

  public setFilteringParam(param: OrderParam) {
    console.log(param);
    this.orderParam.next(param);
  }
}
