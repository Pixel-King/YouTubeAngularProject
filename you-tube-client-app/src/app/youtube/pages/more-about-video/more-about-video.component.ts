import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-more-about-video',
  templateUrl: './more-about-video.component.html',
  styleUrls: ['./more-about-video.component.scss'],
})
export class MoreAboutVideoComponent implements OnInit {
  video: SearchItem;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoService: VideosService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const video = this.videoService.getVideo(id);
      if (video) {
        this.video = video;
      } else {
        this.redirectToNotFound();
      }
    } else {
      this.redirectToNotFound();
    }
  }

  redirectToNotFound() {
    this.router.navigate(['**']);
  }

}
