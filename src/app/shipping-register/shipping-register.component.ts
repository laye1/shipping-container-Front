import { Component, OnInit } from '@angular/core';
import {Shipping} from "../shipping";
import {RestApiService} from "../rest-api.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-shipping-register',
  templateUrl: './shipping-register.component.html',
  styleUrls: ['./shipping-register.component.css']
})
export class ShippingRegisterComponent implements OnInit {

  shipping:Shipping = new Shipping();


  constructor(private restApiService:RestApiService,private  route:Router) { }

  ngOnInit(): void {
  }

saveShip(){
    this.restApiService.createdShip(this.shipping).subscribe(data =>{
      console.log(data);
      alert("Registration Successfull");
      this.route.navigate(["ship-cost"]);


    },
      error => alert("Error"));
}

  onSubmit() {
   this.saveShip();

  }


}
