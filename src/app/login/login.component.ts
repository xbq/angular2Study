import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      用户名：<input #userName type="text">
      <br>

      密&nbsp;&nbsp;&nbsp;&nbsp;码：<input #password type="password">
      <br>
      <button  (click)="Login(userName.value,password.value)">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  data='123'

  Login(userName,password){
    console.log(userName+password);
  }

  ngOnInit() {
  }

}
