import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { compareValidator } from '../shared/compare-validator.directive';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  massage = '';
  visibility: boolean = true;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl('Choose city'),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, compareValidator('password')])
    });
  }

  onSubmit() {
    this.massage = "Спасибо за регистрацию " + this.form.value.name + " из города " + this.form.value.city;
    this.visibility = !this.visibility;
  }

}
