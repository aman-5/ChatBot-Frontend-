import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUp } from '../modal/signup';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signupvalid',
  templateUrl: './signupvalid.component.html',
  styleUrls: ['./signupvalid.component.css']
})
export class SignupvalidComponent {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    userName: new FormControl(''),
    emailID: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    


  });
  submitted = false;
  title: any;

  formValue !: FormGroup;
  signupmodelobj: SignUp = new SignUp();
  constructor(private formBuilder: FormBuilder,private api : SignupService, private router : Router) {}

  ngOnInit(): void {


    this.form = this.formBuilder.group(



      {
        mobile: ['', Validators.required],
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(15),
            
          ]
        ],
        emailID: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
            Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
            
          ]
        ],

        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(10)
          ]
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(10)
          ]
        ],

    
      },
     
    );
  }



    

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;


    if (this.form.valid) {
      this.signupmodelobj.userName = this.form.value.userName;
      this.signupmodelobj.password = this.form.value.password;
      this.signupmodelobj.emailID = this.form.value.emailID;
      this.signupmodelobj.firstName = this.form.value.firstName;
      this.signupmodelobj.lastName = this.form.value.lastName;
      this.api.postSignUPQuery(this.signupmodelobj)
        .subscribe(res => {
          console.log(res);
          alert("Registration Successfull") 
          this.router.navigate([""])   
              
        }, err => {
            console.log(123);
            alert("Something went wrong");
          })

      return;
    }

   

    else (this.form.invalid);
    console.log(JSON.stringify(this.form.value, null, 2)); {
      return;
    }

    




    
    }
  }

 



 
