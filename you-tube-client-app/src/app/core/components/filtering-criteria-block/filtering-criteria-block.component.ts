import { Component } from '@angular/core';
import { SearchAndFilteringService } from '../../services/search-and-filtering.service';
import { OrderParam } from '../../model/order-parameter.model';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {
  sortByWordInputValue = '';

  isSortByDate = false;

  isSortByViewCount = false;

  filteringParam: OrderParam = 'relevance';

  constructor(
    private readonly searchAndFilteringService: SearchAndFilteringService,
  ) {}

  setfilteringParam(sortType:OrderParam) {
    if (sortType === 'date') {
      this.isSortByDate = !this.isSortByDate;
      this.isSortByViewCount = false;
      if (this.isSortByDate) this.filteringParam = 'date';
    }
    if (sortType === 'viewCount') {
      this.isSortByViewCount = !this.isSortByViewCount;
      this.isSortByDate = false;
      if (this.isSortByViewCount) this.filteringParam = 'viewCount';
    }
    if (!this.isSortByViewCount && !this.isSortByDate) this.filteringParam = 'relevance';
    this.searchAndFilteringService.setFilteringParam(this.filteringParam);
  }

  setSortByWord() {
    this.searchAndFilteringService.setFilteringWord(this.sortByWordInputValue);
  }
}
