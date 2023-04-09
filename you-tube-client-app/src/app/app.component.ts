import { Component, OnInit } from '@angular/core';
import { FilteringParamService } from './filtering-criteria-block/filtering-param.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'you-tube-client-app';

  isShow: Boolean;

  constructor(
    readonly filteringParamService: FilteringParamService,
  ) {}

  ngOnInit() {
    this.filteringParamService.isShowSubject.subscribe((value) => this.isShow =  value);
  }
}
