import { Component, OnInit} from '@angular/core';
import { IsOpenService } from './is-open.service';


@Component({
  selector: 'app-root',
  exportAs: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})

export class AppComponent  {

  title = 'Portfolio';
  
  constructor(public isOpenService: IsOpenService){}

}