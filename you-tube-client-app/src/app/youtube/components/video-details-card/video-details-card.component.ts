import { Component, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-video-details-card',
  templateUrl: './video-details-card.component.html',
  styleUrls: ['./video-details-card.component.scss'],
})
export class VideoDetailsCardComponent {
  @Input() video: SearchItem;

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
