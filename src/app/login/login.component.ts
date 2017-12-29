import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      用户名：<input required  type="text"  placeholder="用户名" [(ngModel)]="userName">
      <br>

      密&nbsp;&nbsp;&nbsp;&nbsp;码：<input required  type="password" placeholder="密码" [(ngModel)]="password">
      <br>
      <button  (click)="Login(userName.value,password.value)">Login</button>
    </div>
  `,
  styles: [],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) {

  }

  userName = "";
  password = "";

  Login() {
    console.log('auth result is: ' + this.service.loginWithCredentials(this.userName, this.password) + this.service.temp);
  }

  ngOnInit() {
  }

}
