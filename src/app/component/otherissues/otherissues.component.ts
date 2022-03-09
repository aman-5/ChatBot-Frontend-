import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OtherIssues } from 'src/app/modal/otherissues';
import { OtherissuesService } from 'src/app/services/otherissues.service';
@Component({
  selector: 'app-otherissues',
  templateUrl: './otherissues.component.html',
  styleUrls: ['./otherissues.component.css']
})
export class OtherissuesComponent implements OnInit {
  formValue !: FormGroup;
  otherissuesmodelobj: OtherIssues = new OtherIssues();
  otherissuesdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: OtherissuesService) { }
  display = "none";
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: ['']
    })
    this.getAllOtherIssues();
  }
  onCloseHandled() {
    this.display = "none";
  }
  clickAddOtherIssues() {
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

  postOtherIssues() {
    // this.usermodelobj.uid = this.formValue.value.UserID;
    this.otherissuesmodelobj.queryName = this.formValue.value.queryName;
    this.otherissuesmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.postOtherIssuesQuery(this.otherissuesmodelobj)
      .subscribe(res => {
        console.log(res);
        alert("Query Added Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getAllOtherIssues();
      }, err => {
        alert("Something went wrong");
      })
  }
  getAllOtherIssues() {
    var a = localStorage.getItem('userName')
    if (localStorage.getItem('userName')) {
      this.api.getOtherIssuesQuery().subscribe(res => {
        this.otherissuesdata = res;
      });
    }
    else {
      alert("You are not authenticated")
    }
  }
  deleteOtherIssues(row: any) {
    if (confirm("Are you sure you want to delete this query?")) {
      this.api.deleteOtherIssuesQuery(row.id).subscribe(res => {
        alert("Query has been deleted");
        this.getAllOtherIssues();
      })
    }
  }
  onEdit(row: any) {
    this.display = "block";
    this.showAdd = false;
    this.showUpdate = true;
    this.otherissuesmodelobj.id = row.id;
    this.formValue.controls['queryName'].setValue(row.queryName)
    this.formValue.controls['queryDescription'].setValue(row.queryDescription)
  }
  updateOtherIssues() {
    this.otherissuesmodelobj.queryName = this.formValue.value.queryName;
    this.otherissuesmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.updateOtherIssuesQuery(this.otherissuesmodelobj, this.otherissuesmodelobj.id).subscribe(res => {
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOtherIssues();
    })
  }
}