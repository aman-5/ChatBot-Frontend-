
import { BototherissuesService } from './../../botservice/bototherissues.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BotOtherissues } from 'src/app/botmodel/bototherissues';

@Component({
  selector: 'app-otherchat',
  templateUrl: './otherchat.component.html',
  styleUrls: ['./otherchat.component.css']
})

  export class OtherchatComponent  {
    panelOpenState = false;
    
    otherissues: any;
    formValue !: FormGroup;
    otherissuesmodelobj:BotOtherissues = new BotOtherissues();
    otherissuesdata !: any;
    showAdd !:boolean;
    showUpdate !:boolean;
    constructor(private formbuilder: FormBuilder, private api : BototherissuesService) { }
    display = "none";
    ngOnInit(): void {
    this.formValue = this.formbuilder.group({
    queryName : [''],
    queryDescription : [''],
    id:['']
    })
    this.getAllOtherissues();
    }
    
    
    
    getAllOtherissues() {
   
      var a = localStorage.getItem('userName')
      if(localStorage.getItem('userName')) {
          this.api.getOtherissuesQuery().subscribe(res => {
          this.otherissuesdata = res;  
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