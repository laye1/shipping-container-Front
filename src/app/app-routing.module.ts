import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShippingRegisterComponent} from "./shipping-register/shipping-register.component";
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {LoginComponent} from "./login/login.component";
import {ShippingCostComponent} from "./shipping-cost/shipping-cost.component";
import {AuthGuardService} from "./auth-guard.service";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:UserRegistrationComponent},
  {path:'ship', component:ShippingRegisterComponent,canActivate: [AuthGuardService]},
  {path:'login', component:LoginComponent},
  {path:'ship-cost', component:ShippingCostComponent,canActivate: [AuthGuardService]},
  { path: '**', redirectTo: '/home' },
  {path:'logOut',redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
