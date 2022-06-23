import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService) { }
  contactForm: FormGroup= this.fb.group(
    {
      contactFormName: '',
      contactFormEmail: '',
      contactFormSubjects: '',
      contactFormMessage: '',
    }
  );
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.contactForm.value)
this.auth.sendMessage(this.contactForm.value)
.subscribe(response => {
location.href = 'https://mailthis.to/confirm'
console.log(response)
}, error => {
console.warn(error.responseText)
console.log({ error })
})
  }

}
