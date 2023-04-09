import { Component } from '@angular/core';
import { FilteringParamService } from 'src/app/filtering-criteria-block/filtering-param.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  constructor(
    readonly filteringParamService: FilteringParamService,
  ) {}

  onClick():void {
    this.filteringParamService.switchShowFilteringBlock();
  }
}
