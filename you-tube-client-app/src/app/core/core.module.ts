import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginInformationBlockComponent } from './components/login-information-block/login-information-block.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchInputWithSubmitButtonComponent } from './components/search-input-with-submit-button/search-input-with-submit-button.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';
import { FilteringCriteriaBlockComponent } from './components/filtering-criteria-block/filtering-criteria-block.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    LoginInformationBlockComponent,
    LogoComponent,
    SearchInputWithSubmitButtonComponent,
    SettingsButtonComponent,
    HeaderComponent,
    FilteringCriteriaBlockComponent,
    NotFoundPageComponent,
  ],
  exports: [HeaderComponent, NotFoundPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class CoreModule { }
