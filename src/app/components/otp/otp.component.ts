import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {

  otpForm: FormGroup;
  submitted = false;

  get otp() {
    return this.otpForm.get('otp');
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.otpForm = this.fb.group({
      'otp':['', Validators.required]
    })
  }

  submitOtp(formData) {
    console.log(formData)
  }

}
