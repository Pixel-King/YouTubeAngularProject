import { Injectable } from '@angular/core';

export type FilteringType = '' | 'date' | 'view';

export interface FilteringParam {
  type: FilteringType,
  isReverse: Boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SearchResponceService {

}
