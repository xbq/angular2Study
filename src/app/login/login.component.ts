import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl:'login.component.html',
  styles: [],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService) {

  }

  //
  onSubmit(formValue) {
    console.log(formValue);
    console.log(formValue.login.userName + '---' + formValue.login.password + '\n'+'auth result is: ' +
      this.service.loginWithCredentials(formValue.login.userName, formValue.login.password));
  }

  ngOnInit() {
  }

}
