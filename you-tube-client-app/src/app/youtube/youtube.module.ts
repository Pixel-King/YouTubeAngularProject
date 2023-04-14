import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchResiltsItemComponent } from './components/search-resilts-item/search-resilts-item.component';
import { VideoStatisticsComponent } from './components/video-statistics/video-statistics.component';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { NumeralReductionPipe } from './pipes/numeral-reduction.pipe';
import { MoreAboutVideoComponent } from './pages/more-about-video/more-about-video.component';
import { SearchResultFilterPipe } from './pipes/search-result-filter.pipe';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { VideoDetailsCardComponent } from './components/video-details-card/video-details-card.component';
import { DescriptionPipe } from './pipes/description.pipe';



@NgModule({
  declarations: [
    VideoStatisticsComponent,
    VideoThumbnailComponent,
    SearchResultsComponent,
    SearchResiltsItemComponent,
    SearchResultFilterPipe,
    NumeralReductionPipe,
    MoreAboutVideoComponent,
    SearchResultFilterPipe,
    MainPageComponent,
    VideoDetailsCardComponent,
    DescriptionPipe,
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
