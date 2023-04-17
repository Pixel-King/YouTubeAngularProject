import { Component } from '@angular/core';
import { SearchAndFilteringService } from '../../services/search-and-filtering.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  constructor(
    readonly filteringParamService: SearchAndFilteringService,
  ) {}

  onClick():void {
    this.filteringParamService.switchShowFilteringBlock();
  }
}
