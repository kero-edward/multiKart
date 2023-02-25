import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
  }

  get newsLetterForm() {
    return this.form.controls;
  }

  getData() {
    console.log(this.form.controls.email.value);
  }
}