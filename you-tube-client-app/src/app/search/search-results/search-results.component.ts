import { Component } from '@angular/core';
import { SearchResponce } from '../search-responce.model';
import { data } from '../data/yuoTubeApiRes';
import { SearchItem } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  res: SearchResponce = new SearchResponce(data);

  videos: SearchItem[] = this.res.getSearchResult();
}
