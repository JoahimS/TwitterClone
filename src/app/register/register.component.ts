import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../utils.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  success = false;
  result: object;

  constructor(private formBuilder: FormBuilder, private data: UtilsService, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      biography: ['', Validators.required]
    });

    localStorage.removeItem('token');
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }
    this.success = true;

    const username: string = this.registerForm.controls.username.value;
    const password: string = this.registerForm.controls.password.value;
    const email: string = this.registerForm.controls.email.value;
    const biography: string = this.registerForm.controls.biography.value;

    const user = {
      username: username,
      password: password,
      email: email,
      biography: biography
    };
    this.data.registerUser(user).subscribe(data => {
      this.result = data;
      console.log('successful POST request!');
      console.log(this.result);
      this.router.navigate(['/home']);
    });
  }
}
