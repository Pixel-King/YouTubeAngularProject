import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { MoreAboutVideoComponent } from './youtube/pages/more-about-video/more-about-video.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthGuard } from './auth-guard.guard';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: MainPageComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchResultsComponent, canActivate: [AuthGuard] },
  { path: 'more-about-video/:id', component: MoreAboutVideoComponent, canActivate: [AuthGuard] },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
    ] },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
