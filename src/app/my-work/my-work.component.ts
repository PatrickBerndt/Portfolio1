import { Component  } from '@angular/core';
import { Projects } from '../projects/projects';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
 
  
})
export class MyWorkComponent {
 projectList: any  = Projects.projects;

  link(callLink: any){
    window.open(callLink);

  };

}
