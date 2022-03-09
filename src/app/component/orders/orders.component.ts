import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Orders } from 'src/app/modal/orders';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  formValue !: FormGroup;
  ordersmodelobj: Orders = new Orders();
  ordersdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: OrdersService) { }
  display = "none";

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: ['']

    })
    this.getAllOrders();
  }
  onCloseHandled() {
    this.display = "none";
  }
  clickAddOrders() {
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
  postOrdersDetails() {
    this.ordersmodelobj.queryName = this.formValue.value.queryName;
    this.ordersmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.postOrdersQuery(this.ordersmodelobj)
      .subscribe(res => {
        console.log(res);
        alert("Query Added Successfully")
        this.formValue.reset();
        let ref = document.getElementById('cancel')
        ref?.click();
        this.getAllOrders();
      }, err => {
        alert("Something went wrong");
      })
  }
  getAllOrders() {
    var a = localStorage.getItem('userName')
    if (localStorage.getItem('userName')) {
      this.api.getOrdersQuery().subscribe(res => {
        this.ordersdata = res;
      });
    }
    else {
      alert("You are not authenticated")
    }
  }
  deleteOrders(row: any) {
    if (confirm("Are you sure you want to delete this Query")) {
      this.api.deleteOrdersQuery(row.id).subscribe(res => {
        alert("Query has been deleted");
        this.getAllOrders();
      })
    }
  }
  onEdit(row: any) {
    this.display = "block";
    this.showAdd = false;
    this.showUpdate = true;
    this.ordersmodelobj.id = row.id;
    this.formValue.controls['queryName'].setValue(row.queryName)
    this.formValue.controls['queryDescription'].setValue(row.queryDescription)
  }
  updateOrders() {
    this.ordersmodelobj.queryName = this.formValue.value.queryName;
    this.ordersmodelobj.queryDescription = this.formValue.value.queryDescription;
    this.api.updateOrdersQuery(this.ordersmodelobj, this.ordersmodelobj.id).subscribe(res => {
      alert("Updated Successfully");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOrders();
    })
  }

}
