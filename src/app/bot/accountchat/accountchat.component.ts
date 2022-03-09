import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BotAccount } from 'src/app/botmodel/botaccount';
import { BotaccountService } from 'src/app/botservice/botaccount.service';
;

@Component({
  selector: 'app-accountchat',
  templateUrl: './accountchat.component.html',
  styleUrls: ['./accountchat.component.css']
})
export class AccountchatComponent  {

  panelOpenState = false;
  accountdetailsdata: any;
  formValue !: FormGroup;
  accountdetailsmodelobj: BotAccount = new BotAccount();
  botaccountdata !: any;
  showAdd !:boolean;
  showUpdate !:boolean;
constructor(private formbuilder: FormBuilder, private api : BotaccountService) { }
  
display = "none";
ngOnInit(): void {
  this.formValue = this.formbuilder.group({
  queryName : [''],
  queryDescription : [''],
  id:['']
  })
  this.getAllAccountDetails();
  }

 

    getAllAccountDetails() {
      
      var a = localStorage.getItem('userName')
      if(localStorage.getItem('userName')) {
          this.api.getAccountDetailsQuery().subscribe(res => {
          this.accountdetailsdata = res;  
          });
    }
    else{
      alert("You are not authenticated")
    }
  }
    deleteLocalStorage(){
      localStorage.removeItem('userName')
    }

      

}
