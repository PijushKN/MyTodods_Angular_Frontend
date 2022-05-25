import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username==="Pijush" && password === "1234"){
      sessionStorage.setItem('authenticateToken',username);
      return true
    }
    else{
      return false
    }
  }

  isAuthenticated(){
    return !(sessionStorage.getItem('authenticateToken')===null)
  }

  logoutCompleted(){
    sessionStorage.removeItem('authenticateToken')
  }

  
}
