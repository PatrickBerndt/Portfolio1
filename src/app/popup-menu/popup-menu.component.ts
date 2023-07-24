import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss'],
  
})
export class PopupMenuComponent {
  
  

  
  constructor(private scroller: ViewportScroller, public isOpenService: IsOpenService){
    
  }

  link(callLink: any){
    window.open(callLink);
  }

  

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  toggleMenu(){
    this.isOpenService.isOpen = !this.isOpenService.isOpen
    
  }
}
