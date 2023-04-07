import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  @Input() isShowSettings: Boolean;

  onClick():void {
    this.isShowSettings = !this.isShowSettings;
  }
}
