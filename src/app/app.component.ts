import { Component } from '@angular/core';
import { PopupMenuComponent } from './popup-menu/popup-menu.component';

@Component({
  selector: 'app-root',
  exportAs: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';
  isOpen: boolean | undefined = PopupMenuComponent.isOpen;

}
