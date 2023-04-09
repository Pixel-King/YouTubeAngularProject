import { Component } from '@angular/core';
import { SearchResponceService } from 'src/app/search/search-responce.service';

@Component({
  selector: 'app-search-input-with-submit-button',
  templateUrl: './search-input-with-submit-button.component.html',
  styleUrls: ['./search-input-with-submit-button.component.scss'],
})
export class SearchInputWithSubmitButtonComponent {
  searchValue = '';

  constructor(
    private readonly searchResponceService: SearchResponceService,
  ) {}

  onSearch() {
    this.searchResponceService.setSearchResponce();
  }
}
