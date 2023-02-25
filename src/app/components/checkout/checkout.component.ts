import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  
  contactForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
    lastName: new FormControl(null, [Validators.required, Validators.maxLength(15)]),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    postalCode: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required)
  })

  get contactUsForm() {
    return this.contactForm.controls;
  }

  getData() {
    console.log('firstName: ', this.contactForm.controls['firstName'].value);
    console.log('lastName: ', this.contactForm.controls['lastName'].value);
    console.log('Phone: ', this.contactForm.controls['phone'].value);
    console.log('Email: ', this.contactForm.controls['email'].value);
    console.log('Country: ', this.contactForm.controls['country'].value);
    console.log('City: ', this.contactForm.controls['city'].value);
    console.log('PostalCode: ', this.contactForm.controls['postalCode'].value);
    console.log('Address: ', this.contactForm.controls['address'].value);
    this.router.navigate(['confirmation']);
  }
}