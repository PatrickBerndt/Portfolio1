import { Component } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  constructor(public isOpenService: IsOpenService){
  }
  toggleImpressum(){
    this.isOpenService.impressumIsOpen = !this.isOpenService.impressumIsOpen
  }
}
