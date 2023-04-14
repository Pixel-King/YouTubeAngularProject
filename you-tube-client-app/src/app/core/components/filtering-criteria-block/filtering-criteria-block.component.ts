import { Component } from '@angular/core';
import { FilteringParam, FilteringType } from 'src/app/youtube/services/search-responce.service';
import { SearchAndFilteringService } from '../../services/search-and-filtering.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {
  sortByWordInputValue = '';

  filteringParam:FilteringParam = {
    type: '',
    isReverse: false,
  };

  constructor(
    private readonly searchAndFilteringService: SearchAndFilteringService,
  ) {}

  setfilteringParam(sortType:FilteringType) {
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
    this.searchAndFilteringService.setFilteringParam(this.filteringParam);
  }

  setSortByWord() {
    this.searchAndFilteringService.setFilteringWord(this.sortByWordInputValue);
  }
}
