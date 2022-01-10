import { Component, OnInit } from '@angular/core';
import {Shipping} from "../shipping";
import {RestApiService} from "../rest-api.service";

@Component({
  selector: 'app-shipping-register',
  templateUrl: './shipping-register.component.html',
  styleUrls: ['./shipping-register.component.css']
})
export class ShippingRegisterComponent implements OnInit {

  shipping:Shipping = new Shipping();

  constructor(private restApiService:RestApiService) { }

  ngOnInit(): void {
  }

saveShip(){
    this.restApiService.createdShip(this.shipping).subscribe(data =>{
      console.log(data);
    },
      error => console.log(error));
}

  onSubmit() {
   console.log(this.shipping);
   this.saveShip()

  }
}
