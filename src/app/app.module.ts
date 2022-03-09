import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AccountdetailsComponent } from './component/accountdetails/accountdetails.component';
import { PaymentComponent } from './component/payment/payment.component';
import { OtherissuesComponent } from './component/otherissues/otherissues.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ShoppingchatComponent } from './bot/shoppingchat/shoppingchat.component';
import { AccountchatComponent } from './bot/accountchat/accountchat.component';
import { PaymentchatComponent } from './bot/paymentchat/paymentchat.component';
import { OrderchatComponent } from './bot/orderchat/orderchat.component';
import { OtherchatComponent } from './bot/otherchat/otherchat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import { SignupvalidComponent } from './signupvalid/signupvalid.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ShoppingComponent,
    OrdersComponent,
    AccountdetailsComponent,
    PaymentComponent,
    OtherissuesComponent,
    SignupComponent,
    SigninComponent,
    ChatbotComponent,
    ShoppingchatComponent,
    AccountchatComponent,
    PaymentchatComponent,
    OrderchatComponent,
    OtherchatComponent,
    SignupvalidComponent,

    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
