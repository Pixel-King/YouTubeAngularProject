import { Component } from '@angular/core';
import { FilteringParam, FilteringType, SearchResponceService } from '../search/search-responce.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {
  sortByWordinputValue = '';

  filteringParam:FilteringParam = {
    type: '',
    isReverse: false,
  };

  constructor(
    private readonly searchRearchResponceService: SearchResponceService,
  ) {}

  setfilteringParam(sortType: FilteringType) {
    if (this.filteringParam.type === sortType ) {
      if (this.filteringParam.isReverse === true) {
        this.filteringParam.type = '';
        this.filteringParam.isReverse = false;
      } else {
        this.filteringParam.type = sortType;
        this.filteringParam.isReverse = true;
      }
    } else {
      this.filteringParam.type = sortType;
    }
    this.searchRearchResponceService.filteringParam = this.filteringParam;
  }

  setSortByWord() {
    this.searchRearchResponceService.filteringWord = this.sortByWordinputValue;
  }
}
