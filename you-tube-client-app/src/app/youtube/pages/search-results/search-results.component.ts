import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { FilteringParam } from '../../services/search-responce.service';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos: SearchItem[];

  filteringWord = '';

  filteringParam:FilteringParam = {
    type: '',
    isReverse: false,
  };

  constructor(private route: ActivatedRoute, private videosService: VideosService) {}

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
    //  data.items.map(el => new SearchItem(el));
    this.route.queryParams.subscribe(params => {
      try {
        this.filteringWord = params['filteringWord'];
        this.filteringParam = JSON.parse(decodeURIComponent(params['filteringParam']));
      } catch (error) {
        console.error(error);
      }
    });
  }

}
