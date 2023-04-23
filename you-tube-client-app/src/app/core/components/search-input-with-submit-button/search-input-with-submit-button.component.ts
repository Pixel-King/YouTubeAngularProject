import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FilteringParam } from 'src/app/youtube/services/search-responce.service';
import { SearchAndFilteringService } from '../../services/search-and-filtering.service';
import { OrderParam } from '../../model/order-parameter.model';
import { VideosService } from 'src/app/youtube/services/videos.service';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss'],
})
export class SearchInputWithSubmitButtonComponent implements OnInit {
  searchInputValue = '';

  filterInputValue: string;

  orderParam: OrderParam;

  constructor(
    private readonly searchAndFilteringService: SearchAndFilteringService,
    private videoService: VideosService,
    private router: Router,
  ) {}

  onSearch() {
    if (this.searchInputValue.length >= 3) {
      const pre = this.searchInputValue;
      setTimeout(() =>{
        if (pre === this.searchInputValue) {
          const queryParams = { search: this.searchInputValue, filter: this.filterInputValue, order: this.orderParam };
          this.router.navigate(['search'], { queryParams });
        }
      }, 500);
    }
  }

  ngOnInit(): void {
    this.searchAndFilteringService.filteringWord.subscribe(value => this.filterInputValue = value);
    this.searchAndFilteringService.orderParam.subscribe(value => this.orderParam = value);
  }
}
