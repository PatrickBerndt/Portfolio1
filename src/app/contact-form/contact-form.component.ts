import { Component  } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  name: any;
  email: any;
  message: any;
  isSending: any;

 
  
    async sendMail(){
      this.isSending = true;
      console.log('disable is true');

      let data = new FormData();
      data.append('name', this.name);
      data.append('email', this.email);
      data.append('message', this.message);
      // await fetch('https://www.patrickberndt.de/sendmail/send_mail.php', {
      //     method: 'POST',
      //     body: data
      // })
      setTimeout(() => {
        this.isSending = false;
        console.log('disable is false');
      }, 2000);
      
      
    }

    disableInputs(give: boolean){
      let nameField:any = document.getElementById('name');
      let emailField:any = document.getElementById('email');
      let messageField:any = document.getElementById('message');
      let sendBTN:any = document.getElementById('btn');

      nameField.disable = give;
      emailField.disable = give;
      messageField.disable = give;
      sendBTN.disable = give;
      console.log('disable is ', give);
      
      
    }
 
}
