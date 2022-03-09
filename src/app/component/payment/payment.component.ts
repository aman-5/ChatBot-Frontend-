import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from 'src/app/modal/payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  formValue !: FormGroup;
  paymentmodelobj: Payment = new Payment();
  paymentdata !: any;
  showAdd !:boolean;
  showUpdate !:boolean;
  constructor(private formbuilder: FormBuilder, private api : PaymentService) { }
  display = "none";

  ngOnInit(): void {

    this.formValue = this.formbuilder.group({
      queryName : [''],
      queryDescription : ['']

    })
    this.getAllPayment();
  }
    onCloseHandled() {
    this.display = "none";
    }
    clickAddPayment(){
      var a = localStorage.getItem('userName')
      if(localStorage.getItem('userName')){
        this.display = "block"
        this.formValue.reset();
        this.showAdd =true;
        this.showUpdate =false;
      }
      else{
        alert("You are not authenticated")
      }
    }
    deleteLocalStorage() {
      localStorage.removeItem('userName')
    }
    postPaymentDetails() {
      // this.usermodelobj.uid = this.formValue.value.UserID;
      this.paymentmodelobj.queryName = this.formValue.value.queryName;
      this.paymentmodelobj.queryDescription = this.formValue.value.queryDescription;
      this.api.postPaymentQuery(this.paymentmodelobj)
        .subscribe(res => {
          console.log(res);
          alert("Query Added Successfully")
          this.formValue.reset();
          let ref =document.getElementById('cancel')
          ref?.click();
          this.getAllPayment();
        }, err => {
            alert("Something went wrong");
          })
      }
      getAllPayment() {
        var a = localStorage.getItem('userName')
        if(localStorage.getItem('userName')){
        this.api.getPaymentQuery().subscribe(res => {
          this.paymentdata = res;
        });
      }
      else{
        alert("You are not authenticated")
      }
      }
      deletePayment(row :any){
        if(confirm("Are you sure you want to delete this Query")){
        this.api.deletePaymentQuery(row.id).subscribe(res=>{
          alert("Query has been deleted");
          this.getAllPayment();
        })
      }
      }
        onEdit(row :any){
          this.display = "block";
          this.showAdd = false;
          this.showUpdate =true;
          this.paymentmodelobj.id = row.id;
          this.formValue.controls['queryName'].setValue(row.queryName)
          this.formValue.controls['queryDescription'].setValue(row.queryDescription)
        }
        updatePayment(){
          this.paymentmodelobj.queryName = this.formValue.value.queryName;
      this.paymentmodelobj.queryDescription = this.formValue.value.queryDescription;
      this.api.updatePaymentQuery(this.paymentmodelobj,this.paymentmodelobj.id).subscribe(res=>{
        alert("Updated Successfully");
          let ref =document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.getAllPayment();
      })
     }

}