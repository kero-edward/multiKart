import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, Validators.required)
  })

  get contactUsForm() {
    return this.contactForm.controls;
  }

  getData() {
    console.log('firstName: ', this.contactForm.controls['firstName'].value);
    console.log('lastName: ', this.contactForm.controls['lastName'].value);
    console.log('Phone: ', this.contactForm.controls['phone'].value);
    console.log('Email: ', this.contactForm.controls['email'].value);
    console.log('Message: ', this.contactForm.controls['message'].value);
  }
}