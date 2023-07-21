import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private scroller: ViewportScroller){}

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }
}
