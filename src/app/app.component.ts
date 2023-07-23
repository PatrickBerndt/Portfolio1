import { Component, OnInit} from '@angular/core';
import { IsOpen } from './services/isOpen.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  exportAs: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IsOpen]
})

export class AppComponent implements OnInit {

  title = 'Portfolio';
  private isOpenSubscription: Subscription | undefined;

  constructor(public isOpenService: IsOpen) {
    
  }

  ngOnInit(){
    this.isOpenSubscription = this.isOpenService.isOpen$.subscribe((isOpen: boolean) => {
      console.log('isOpen:', isOpen);})
  }
 

}