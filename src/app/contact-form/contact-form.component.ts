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

      let data = new FormData();
      data.append('name', this.name);
      data.append('email', this.email);
      data.append('message', this.message);
      await fetch('https://www.patrickberndt.de/sendmail/send_mail.php', {
          method: 'POST',
           body: data
       })
      this.cleanInputs()
      setTimeout(() => {
        this.isSending = false;
      }, 2000);
    }

    cleanInputs(){
      this.name = '';
      this.email = '';
      this.message = '';
    }
 
}
