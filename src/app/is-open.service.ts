import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsOpenService {
  isOpen: boolean | undefined;
  constructor() { }
}
