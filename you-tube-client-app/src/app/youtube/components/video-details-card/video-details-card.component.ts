import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { VideoVideosRes } from '../../models/videos-responce.model';

@Component({
  selector: 'app-video-details-card',
  templateUrl: './video-details-card.component.html',
  styleUrls: ['./video-details-card.component.scss'],
})
export class VideoDetailsCardComponent {
  @Input() video: VideoVideosRes;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
