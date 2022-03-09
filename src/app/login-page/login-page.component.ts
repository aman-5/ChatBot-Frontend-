import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  userName !:string;
  password !: string;
  
  constructor(private router:Router) { 

  }

  adminLogin() {

    if(this.userName == "admin" && this.password == "password"){
      this.router.navigate(["admin/shopping"])
      localStorage.setItem('userName','admin')
      alert("Login Sucessful")
    }
    else{
      alert("Sorry please enter the correct User Name and Password")
    }
  }
}
