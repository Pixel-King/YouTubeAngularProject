import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchResiltsItemComponent } from './components/search-resilts-item/search-resilts-item.component';
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { NumeralReductionPipe } from './pipes/numeral-reduction.pipe';
import { MoreAboutVideoComponent } from './pages/more-about-video/more-about-video.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { VideoDetailsCardComponent } from './components/video-details-card/video-details-card.component';
import { DescriptionPipe } from './pipes/description.pipe';
import { BorderColorByDateDirective } from './directives/border-color-by-date.directive';



@NgModule({
  declarations: [
    VideoStatisticsComponent,
    VideoThumbnailComponent,
    SearchResultsComponent,
    SearchResiltsItemComponent,
    NumeralReductionPipe,
    MoreAboutVideoComponent,
    MainPageComponent,
    VideoDetailsCardComponent,
    DescriptionPipe,
    BorderColorByDateDirective,
  ],
  exports: [
    SearchResultsComponent,
    MoreAboutVideoComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class YoutubeModule { }
