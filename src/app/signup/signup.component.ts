import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SignUp } from '../modal/signup';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formValue !: FormGroup;
  signupmodelobj: SignUp = new SignUp();
  constructor(private formbuilder: FormBuilder, private api : SignupService) { }

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      userName : [''],
      password : [''],
      emailID : [''],
      firstName :[''],
      lastName : ['']

    })
  }

  postSignUpDetails() {
    this.signupmodelobj.userName = this.formValue.value.userName;
    this.signupmodelobj.password = this.formValue.value.password;
    this.signupmodelobj.emailID = this.formValue.value.emailID;
    this.signupmodelobj.firstName = this.formValue.value.firstName;
    this.signupmodelobj.lastName = this.formValue.value.lastName;
    this.api.postSignUPQuery(this.signupmodelobj)
      .subscribe(res => {
        console.log(res);
        alert("Registration Successfull")    
            
      }, err => {
          console.log(123);
          alert("Something went wrong");
        })
    }

}
