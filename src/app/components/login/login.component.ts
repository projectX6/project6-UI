import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/validations/password-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': ['',[Validators.required, forbiddenNameValidator(/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      'password': ['', Validators.required]
    })
  }

  login(formData) {
    console.log(formData);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  }
}
