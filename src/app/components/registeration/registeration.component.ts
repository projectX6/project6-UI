import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/custom-validation';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  signUpForm: FormGroup;

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
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'mobileNumber': ['', Validators.required],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', Validators.required]
    }, { validator: PasswordValidator });
  }

  show(value) {
    console.log(value);
  }

  signUp(formData) {
    console.log('FormData', formData);
    if (formData.firstName !== '' || formData !== undefined) {
      this.router.navigate(['/otp']);
    } else {

    }
  }

}
