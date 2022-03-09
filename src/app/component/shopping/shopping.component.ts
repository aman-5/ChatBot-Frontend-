import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Shopping } from '../../modal/shopping';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  [x: string]: any;

  formValue !: FormGroup;
  shoppingmodelobj: Shopping = new Shopping();
  shoppingdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: ShoppingService) { }
  display = "none";

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: ['']

    })
    this.getAllShopping();
  }
  onCloseHandled() {
    this.display = "none";
  }
  clickAddShopping() {
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

  postShoppingDetails() {
    this.shoppingmodelobj.queryName = this.formValue.value.queryName;
    this.shoppingmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.postShoppingQuery(this.shoppingmodelobj)
      .subscribe(res => {
        console.log(res);
        alert("Query Added Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getAllShopping();
      }, err => {
        alert("Something went wrong");
      })
  }
  getAllShopping() {
    var a = localStorage.getItem('userName')
    if (localStorage.getItem('userName')) {
      this.api.getShoppingQuery().subscribe(res => {
        this.shoppingdata = res;
      });
    }
    else {
      alert("You are not authenticated")
    }
  }
  deleteShopping(row: any) {
    if (confirm("Are you sure you want to delete this Query?")) {
      this.api.deleteShoppingQuery(row.id).subscribe(res => {
        console.log(row.id)
        alert("Query has been deleted");
        this.getAllShopping();
      })
    }
  }
  onEdit(row: any) {
    this.display = "block";
    this.showAdd = false;
    this.showUpdate = true;
    this.shoppingmodelobj.id = row.id;
    this.formValue.controls['queryName'].setValue(row.queryName)
    this.formValue.controls['queryDescription'].setValue(row.queryDescription)
  }
  updateShopping() {
    this.shoppingmodelobj.queryName = this.formValue.value.queryName;
    this.shoppingmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.updateShoppingQuery(this.shoppingmodelobj, this.shoppingmodelobj.id).subscribe(res => {
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllShopping();
    })
  }

}
