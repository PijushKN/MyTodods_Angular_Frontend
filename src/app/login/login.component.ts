import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  notAuthenticated = false;
  errorMessage = 'Invalid Credentials'

  constructor(private router:Router,private hardcodedAuthentication:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.hardcodedAuthentication.authenticate(this.username,this.password)){
      console.log('Welcome '+this.username)
      this.notAuthenticated = false
      this.router.navigate(['welcome',this.username])
    }
    else{
      console.log('Not Authenticated')
      this.notAuthenticated = true
    }
  }

}
