import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public temp:number

  constructor() {
    this.temp=0;
   }

  loginWithCredentials(userName:string,password:string):boolean{
    if(userName==='xbq'){
      this.temp++;
      return true;
    }
    return false;
  }

}
