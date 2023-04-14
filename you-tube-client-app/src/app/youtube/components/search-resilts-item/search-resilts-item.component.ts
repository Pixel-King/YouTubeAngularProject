import { Component, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-resilts-item',
  templateUrl: './search-resilts-item.component.html',
  styleUrls: ['./search-resilts-item.component.scss'],
})
export class SearchResiltsItemComponent {
  @Input() video: SearchItem;

  constructor(private router: Router, private route: ActivatedRoute) {}

  showMoreDetails() {
    this.router.navigate([`more-about-video/${this.video.id}`]);
  }
}
