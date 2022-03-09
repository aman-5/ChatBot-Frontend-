import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignIn } from '../modal/signin';
import { SigninService } from '../services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  form !: FormGroup;
  signinmodelobj: SignIn = new SignIn();
  constructor(private formbuilder: FormBuilder, private api : SigninService, private router : Router) { }

  ngOnInit(): void {

    this.form = this.formbuilder.group({
      userName : [''],
      password : ['']

    })
  }

  postNormalQueryDetails() {
    this.signinmodelobj.userName = this.form.value.userName;
    this.signinmodelobj.password = this.form.value.password;
    this.api.postNormalUserQuery(this.signinmodelobj)
      .subscribe(res => {
        console.log(res);
        if(res != false){
          alert("Authentication Successfull");
          localStorage.setItem('userName',this.form.value.userName)
          this.router.navigate(["chatbot"])

        }
        else
        alert("Something went wrong");  
      }, err => {
          alert("Something went wrong");
        })
    }

}
