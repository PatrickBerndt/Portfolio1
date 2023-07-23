import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { IsOpen } from '../services/isOpen.service';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss'],
  providers: [IsOpen]
})
export class PopupMenuComponent {
  
  private isOpenSubscription: Subscription;

  
  constructor(private scroller: ViewportScroller, public isOpenService: IsOpen){
    this.isOpenSubscription = this.isOpenService.isOpen$.subscribe((isOpen: boolean) => {
      console.log('isOpen:', isOpen);
    })
  }

  link(callLink: any){
    window.open(callLink);
  }

  

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  toggleMenu(){
    
    this.isOpenService.isOpen = !this.isOpenService.isOpen;
  }
}
