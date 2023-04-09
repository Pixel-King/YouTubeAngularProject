import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { SearchInputWithSubmitButtonComponent } from './header/search-input-with-submit-button/search-input-with-submit-button.component';
import { LoginInformationBlockComponent } from './header/login-information-block/login-information-block.component';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchResultItemComponent } from './search/search-result-item/search-result-item.component';
import { VideoThumbnailComponent } from './search/search-result-item/video-thumbnail/video-thumbnail.component';
import { VideoStatisticsComponent } from './search/search-result-item/video-statistics/video-statistics.component';
import { FilteringCriteriaBlockComponent } from './filtering-criteria-block/filtering-criteria-block.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SettingsButtonComponent,
    SearchInputWithSubmitButtonComponent,
    LoginInformationBlockComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    VideoThumbnailComponent,
    VideoStatisticsComponent,
    FilteringCriteriaBlockComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
