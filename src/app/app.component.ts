import { Component, OnDestroy } from '@angular/core';
import { IsOpen } from './services/isOpen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  exportAs: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IsOpen]
})

export class AppComponent implements OnDestroy  {

  title = 'Portfolio';
  private isOpenSubscription: Subscription;

  constructor(public isOpenService: IsOpen) {
    this.isOpenSubscription = this.isOpenService.isOpen$.subscribe((isOpen: boolean) => {
      console.log('isOpen in AnotherComponent:', isOpen);
    });
  }

  ngOnDestroy(): void {
    this.isOpenSubscription.unsubscribe();
  }

}