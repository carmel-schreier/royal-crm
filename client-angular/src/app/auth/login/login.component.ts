import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('first') firstField!: ElementRef;
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
  }

  ngAfterViewInit(): void {
    //this.firstField.nativeElement.focus();
  }
}
