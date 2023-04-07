import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { SearchItem } from '../../search-item.model';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-video-statistics',
  templateUrl: './video-statistics.component.html',
  styleUrls: ['./video-statistics.component.scss'],
})
export class VideoStatisticsComponent implements OnInit {
  @Input() video: SearchItem;

  constructor(
    @Inject(LOCALE_ID) public locale: string) {}

  viewCount: String;

  likeCount: String;

  dislikeCount: String;

  commentCount: String;

  ngOnInit(): void {
    this.likeCount = this.numeralReductions(this.video.getStatistic('likeCount'));
    this.dislikeCount = this.numeralReductions(this.video.getStatistic('dislikeCount'));
    this.viewCount = this.numeralReductions(this.video.getStatistic('viewCount'));
    this.commentCount = this.numeralReductions(this.video.getStatistic('commentCount'));
  }

  numeralReductions(str: String ): String {
    if (str.length > 6) {
      return `${formatNumber(+str / 1000000, this.locale, '1.0-1')}M`;
    }
    if (str.length > 3) {
      return `${formatNumber(+str / 1000, this.locale, '1.0-1')}K`;
    }
    return str;
  }
}
