import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilteringParam } from 'src/app/youtube/services/search-responce.service';
import { SearchAndFilteringService } from '../../services/search-and-filtering.service';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss'],
})
export class SearchInputWithSubmitButtonComponent implements OnInit {
  searchValue = '';

  filteringWord: string = '';

  filteringParam: FilteringParam = {
    type: '',
    isReverse: false,
  };

  constructor(
    private readonly searchAndFilteringService: SearchAndFilteringService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  onSearch() {
    const queryParams = { filteringWord: this.filteringWord, filteringParam: encodeURIComponent(JSON.stringify(this.filteringParam)) };
    this.router.navigate(['search'], { queryParams });
  }

  ngOnInit(): void {
    this.searchAndFilteringService.filteringWord.subscribe(value => this.filteringWord = value);
    this.searchAndFilteringService.filteringParam.subscribe(value => this.filteringParam = value);
  }
}
