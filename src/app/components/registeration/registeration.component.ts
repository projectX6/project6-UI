import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator, forbiddenNameValidator } from 'src/app/validations/password-validation';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get mobileNumber() {
    return this.signUpForm.get('mobileNumber')
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }


  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'firstName': ['', [Validators.required, Validators.minLength(3)]],
      'lastName': ['', [Validators.required]],
      'email': ['', [Validators.required, forbiddenNameValidator(/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      'mobileNumber': ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      'password': ['', [Validators.required, forbiddenNameValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )]],
      'confirmPassword': ['', Validators.required]
    }, { validator: PasswordValidator });
  }

  signUp(formData) {
    this.submitted = true;
    console.log('FormData', formData);
    if (this.signUpForm.invalid) {
      return;
    } else {
      this.router.navigate(['/otp']);
    }
  }

}
