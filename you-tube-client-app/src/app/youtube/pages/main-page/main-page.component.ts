import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  videos: String[];

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videosService.getVideos().subscribe(videos => this.videos = videos );
  }
}
