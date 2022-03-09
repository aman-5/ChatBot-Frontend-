import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BotOrders } from 'src/app/botmodel/botorders';
import { BotordersService } from 'src/app/botservice/botorders.service';

@Component({
  selector: 'app-orderchat',
  templateUrl: './orderchat.component.html',
  styleUrls: ['./orderchat.component.css']
})
export class OrderchatComponent {
  panelOpenState = false;

  orders: any;
  formValue !: FormGroup;
  ordersmodelobj: BotOrders = new BotOrders();
  ordersdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: BotordersService) { }
  display = "none";
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: [''],
      id: ['']
    })
    this.getAllOrders();
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
  deleteLocalStorage() {
    localStorage.removeItem('userName')
  }

}

