import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent {
  link(callLink: any){
    window.open(callLink);
  };
  constructor(private scroller: ViewportScroller){}

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }
}
