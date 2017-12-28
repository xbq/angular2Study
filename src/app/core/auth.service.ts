import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(userName:string,password:string){
    if(userName==='xbq'){
      return true;
    }
    return false;
  }

}
