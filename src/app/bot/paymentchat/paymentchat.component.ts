import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BotPayment } from 'src/app/botmodel/botpayment';
import { BotpaymentService } from 'src/app/botservice/botpayment.service';

@Component({
  selector: 'app-paymentchat',
  templateUrl: './paymentchat.component.html',
  styleUrls: ['./paymentchat.component.css']
})
export class PaymentchatComponent {

  panelOpenState = false;

  payment: any;
  formValue !: FormGroup;
  paymentmodelobj: BotPayment = new BotPayment();
  paymentdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: BotpaymentService) { }
  display = "none";
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: [''],
      id: ['']
    })
    this.getAllPayment();
  }



  getAllPayment() {
    var a = localStorage.getItem('userName')
    if (localStorage.getItem('userName')) {
      this.api.getPaymentQuery().subscribe(res => {
        this.paymentdata = res;
      });
    }
    else {
      alert("You are not authenticated")
    }
  }
  deleteLocalStorage() {
    localStorage.removeItem('userName')
  }

}