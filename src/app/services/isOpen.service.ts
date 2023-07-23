import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class IsOpen {
  private isOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isOpen$(): Observable<boolean> {
    return this.isOpenSubject.asObservable();
  }

  get isOpen(): boolean {
    return this.isOpenSubject.getValue();
  }

  set isOpen(value: boolean) {
    this.isOpenSubject.next(value);
  }
}