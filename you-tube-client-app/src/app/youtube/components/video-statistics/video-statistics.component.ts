import { Component, Inject, Input, LOCALE_ID } from '@angular/core';
// import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent {
  // @Input() video: SearchItem;

  @Input() viewCount: String;

  @Input() dislikeCount: String;

  @Input() likeCount: String;

  @Input() commentCount: String;

  constructor(
    @Inject(LOCALE_ID) public locale: string) {}

  // viewCount: String;

  // likeCount: String;

  // dislikeCount: String;

  // commentCount: String;

  // ngOnInit(): void {
  //   this.likeCount = this.video.getStatistic('likeCount');
  //   this.dislikeCount = this.video.getStatistic('dislikeCount');
  //   this.viewCount = this.video.getStatistic('viewCount');
  //   this.commentCount = this.video.getStatistic('commentCount');
  // }
}
