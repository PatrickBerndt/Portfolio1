import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss']
})
export class PopupMenuComponent {
  public isOpen: boolean | undefined;
  static isOpen: boolean | undefined;

  link(callLink: any){
    window.open(callLink);
  };
  constructor(private scroller: ViewportScroller){}

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  toggleMenu(){
    if(this.isOpen == undefined){
      this.isOpen = true;
    }else{
      this.isOpen = !this.isOpen
    }
  }
}
