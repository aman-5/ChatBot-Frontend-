
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BotShopping } from 'src/app/botmodel/botshopping';
import { BotshoppingService } from 'src/app/botservice/botshopping.service';

@Component({
  selector: 'app-shoppingchat',
  templateUrl: './shoppingchat.component.html',
  styleUrls: ['./shoppingchat.component.css']
})
export class ShoppingchatComponent {
  panelOpenState = false;
  
  shopping: any;
  formValue !: FormGroup;
  shoppingmodelobj: BotShopping = new BotShopping();
  shoppingdata !: any;
  showAdd !: boolean;
  showUpdate !: boolean;
  constructor(private formbuilder: FormBuilder, private api: BotshoppingService) { }
  display = "none";
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      queryName: [''],
      queryDescription: [''],
      id: ['']
    })
    this.getAllShopping();
  }



  getAllShopping() {
    var a = localStorage.getItem('userName')
    if(localStorage.getItem('userName')) {
        this.api.getShoppingQuery().subscribe(res => {
        this.shoppingdata = res;  
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
