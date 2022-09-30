import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(private route: Router) { }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
    street: new FormControl('', Validators.required),
    suite: new FormControl(''),
    city: new FormControl('', Validators.required),
    zipcode:new FormControl('', Validators.required)
    
  })

  ngOnInit() {
  }
  submit() {
    console.log({
      name: this.form.value.name,
      username: this.form.value.username,
      email: this.form.value.email,
      phone: this.form.value.phone,
      address: {
          street: this.form.value.street,
          suite: this.form.value.suite,
          city: this.form.value.city,
          zipcode: this.form.value.city
      }
    })
    this.form.reset()
    this.route.navigateByUrl('todos')
  }
}
