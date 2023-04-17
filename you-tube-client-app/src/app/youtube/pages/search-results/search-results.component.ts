import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos: String[];

  constructor(private route: ActivatedRoute, private videosService: VideosService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      try {
        const search = params['search'];
        const filtering = params['filter'];
        const order = params['order'];
        console.log(order);
        this.videosService.getVideos(search, filtering, order).subscribe(videos => this.videos = videos);
      } catch (error) {
        console.error(error);
      }
    });
  }

}
