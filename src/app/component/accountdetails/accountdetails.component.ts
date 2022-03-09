import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountDetails } from 'src/app/modal/accountdetails';
import { AccountdetailsService } from 'src/app/services/accountdetails.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  formValue !: FormGroup;
  accountdetailsmodelobj: AccountDetails = new AccountDetails();
  accountdetailsdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: AccountdetailsService) { }
  display = "none";
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: ['']
    })
    this.getAllAccountDetails();
  }
  onCloseHandled() {
    this.display = "none";
  }
  clickAddAccountDetails() {
    var a = localStorage.getItem('userName')
    if (localStorage.getItem('userName')) {
      this.display = "block"
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;
    }
    else {
      alert("You are not authenticated")
    }
  }
  deleteLocalStorage() {
    localStorage.removeItem('userName')
  }
  postAccountDetails() {
    // this.usermodelobj.uid = this.formValue.value.UserID;
    this.accountdetailsmodelobj.queryName = this.formValue.value.queryName;
    this.accountdetailsmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.postAccountDetailsQuery(this.accountdetailsmodelobj)
      .subscribe(res => {
        console.log(res);
        alert("Query Added Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getAllAccountDetails();
      }, err => {
        alert("Something went wrong");
      })
  }
  getAllAccountDetails() {
    var a = localStorage.getItem('userName')
    if (localStorage.getItem('userName')) {
      this.api.getAccountDetailsQuery().subscribe(res => {
        this.accountdetailsdata = res;
      });
    }
    else {
      alert("You are not authenticated")
    }
  }
  deleteAccountDetails(row: any) {
    if (confirm("Are you sure you want to delete this Query?")) {
      this.api.deleteAccountDetailsQuery(row.id).subscribe(res => {
        alert("Query has been deleted");
        this.getAllAccountDetails();
      })
    }
  }
  onEdit(row: any) {
    this.display = "block";
    this.showAdd = false;
    this.showUpdate = true;
    this.accountdetailsmodelobj.id = row.id;
    this.formValue.controls['queryName'].setValue(row.queryName)
    this.formValue.controls['queryDescription'].setValue(row.queryDescription)
  }
  updateAccountDetails() {
    this.accountdetailsmodelobj.queryName = this.formValue.value.queryName;
    this.accountdetailsmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.updateAccountDetailsQuery(this.accountdetailsmodelobj, this.accountdetailsmodelobj.id).subscribe(res => {
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllAccountDetails();
    })
  }
}
