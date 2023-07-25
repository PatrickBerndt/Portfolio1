import { Component } from '@angular/core';
import { IsOpenService } from '../is-open.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private isOpenService: IsOpenService){}

  toggleImpressum(){
    this.isOpenService.impressumIsOpen = !this.isOpenService.impressumIsOpen
  }

  link(callLink: any){
    window.open(callLink);
  };
}
