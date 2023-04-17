import { Component, OnInit } from '@angular/core';
import { SearchAndFilteringService } from '../../services/search-and-filtering.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isShow: Boolean;

  constructor(
    readonly filteringParamService: SearchAndFilteringService,
  ) {}

  ngOnInit() {
    this.filteringParamService.isShowSubject.subscribe((value) => this.isShow =  value);
  }
}
