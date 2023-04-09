import { Component, OnInit } from '@angular/core';
// import { SearchResponce } from '../search-responce.model';
// import { data } from '../data/yuoTubeApiRes';
import { SearchItem } from '../search-item.model';
import { SearchResponceService } from '../search-responce.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos: SearchItem[];

  constructor(
    private readonly searchResponceService: SearchResponceService,
  ) {}

  ngOnInit(): void {
    this.searchResponceService.videos.subscribe(value => this.videos = value);
  }
}
