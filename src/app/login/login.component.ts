import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
    <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
    <fieldset ngModelGroup="login">
      用户名：<input type="text"  [(ngModel)]="userName" placeholder="用户名" #userNameRef = "ngModel" name="userName"
      required 
      minlength=3 

      ng-reflect-minlength="3" 
      ng-reflect-name="username"
      >
      {{userNameRef.errors|json}}
        <span *ngIf="userNameRef.errors?.required">this is required</span>
        <span *ngIf="userNameRef.errors?.minlength">shuold be at least 3 charactors</span>
      <br>
      密&nbsp;&nbsp;&nbsp;&nbsp;码：<input type="password" [(ngModel)]="password" placeholder="密码" #passwordRef = "ngModel" name="password"
      required  
      minlength=6>
      <span *ngIf="passwordRef.errors?.required">this is required</span>
        <span *ngIf="passwordRef.errors?.minlength">shuold be at least 3 charactors</span>
      <br>
      </fieldset>
      <button type="submit">Login</button>
      </form>
    </div>
  `,
  styles: [],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) {

  }

  //
  onSubmit(formValue) {
    console.log(formValue);
    console.log(formValue.login.userName + '---' + formValue.login.password + '\nauth result is: ' +
      this.service.loginWithCredentials(formValue.login.userName, formValue.login.password));
  }

  ngOnInit() {
  }

}
