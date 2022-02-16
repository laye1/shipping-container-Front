import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingRegisterComponent } from './shipping-register/shipping-register.component';
import { HomeComponent } from './home/home.component';
import {RestApiService} from "./rest-api.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ShippingCostComponent } from './shipping-cost/shipping-cost.component';
import {AuthGuardService} from "./auth-guard.service";
import { AdminDasboardComponent } from './admin-dasboard/admin-dasboard.component';
import { UpdateShippingComponent } from './update-shipping/update-shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    ShippingRegisterComponent,
    HomeComponent,
    UserRegistrationComponent,
    LoginComponent,
    HeaderComponent,
    ShippingCostComponent,
    AdminDasboardComponent,
    UpdateShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
