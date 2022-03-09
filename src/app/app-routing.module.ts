import { OtherchatComponent } from './bot/otherchat/otherchat.component';
import { OrderchatComponent } from './bot/orderchat/orderchat.component';
import { ShoppingchatComponent } from './bot/shoppingchat/shoppingchat.component';
import { AccountchatComponent } from './bot/accountchat/accountchat.component';
import { BotAccount } from './botmodel/botaccount';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { PaymentchatComponent } from './bot/paymentchat/paymentchat.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { OtherissuesComponent } from './component/otherissues/otherissues.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountdetailsComponent } from './component/accountdetails/accountdetails.component';
import { OrdersComponent } from './component/orders/orders.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ShoppingComponent } from './component/shopping/shopping.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupvalidComponent } from './signupvalid/signupvalid.component';


const routes: Routes = [

  {path: '',component: SigninComponent },
  {path: 'signup', component:SignupvalidComponent},
  {path: 'admin',component:LoginPageComponent},
  {path: 'admin/shopping',component: ShoppingComponent},
  {path: 'admin/orders', component: OrdersComponent},
  {path: 'admin/accountdetails', component: AccountdetailsComponent},
  {path: 'admin/payment', component: PaymentComponent},
  {path: 'admin/otherissues', component:OtherissuesComponent },
  {path: 'chatbot',component:ChatbotComponent},
  {path:'accbot',component:AccountchatComponent },
  {path: 'paybot', component:PaymentchatComponent},
  {path: 'shopbot',component:ShoppingchatComponent},
  {path: 'orderbot', component:OrderchatComponent},
  {path: 'otherbot',component:OtherchatComponent}


  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
