import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { VideoVideosRes } from '../../models/videos-responce.model';

@Component({
  selector: 'app-search-resilts-item',
  templateUrl: './search-resilts-item.component.html',
  styleUrls: ['./search-resilts-item.component.scss'],
})
export class SearchResiltsItemComponent implements OnInit {
  @Input() videoId: String;

  public video: VideoVideosRes;

  constructor(private router: Router, private videosService: VideosService) {}

  showMoreDetails() {
    this.router.navigate([`more-about-video/${this.videoId}`]);
  }

  ngOnInit(): void {
    this.videosService.getVideo(this.videoId).subscribe(video => this.video = video[0]);
  }
}
