import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilsService } from '../utils.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import {Store} from '@ngxs/store';
import {AddLogin} from './../actions/login.actions';
import { Login } from './../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  result: object;
  logins$: Observable<Login>;

  constructor(private formBuilder: FormBuilder, private data: UtilsService, private router: Router, private store: Store) {
    this.logins$ = this.store.select(state => state.logins.logins);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    localStorage.removeItem('token');

  }

  onSubmit() {
    const username: string = this.loginForm.controls.username.value;
    const password: string = this.loginForm.controls.password.value;

    const user =  {
      username: username,
      password: password
    };

    this.store.dispatch(new AddLogin({username: username, password: password}));


    this.data.loginUser(user).subscribe(data => {
      this.result = data;
      console.log('successful POST request!');
      console.log(this.result);
      localStorage.setItem('token', JSON.stringify(this.result));
      this.router.navigate(['/reserved']);
    });
  }


}
