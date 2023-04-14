import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  videos: SearchItem[];

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
  }
}
