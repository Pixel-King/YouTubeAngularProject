import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { VideoVideosRes } from '../../models/videos-responce.model';

@Component({
  selector: 'app-more-about-video',
  templateUrl: './more-about-video.component.html',
  styleUrls: ['./more-about-video.component.scss'],
})
export class MoreAboutVideoComponent implements OnInit {
  video: VideoVideosRes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoService: VideosService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.videoService.getVideo(id).subscribe(value => {
        if (value.length) {
          this.video = value[0];
        } else {
          this.redirectToNotFound();
        }
      });
    } else {
      this.redirectToNotFound();
    }
  }

  redirectToNotFound() {
    this.router.navigate(['**']);
  }
}
