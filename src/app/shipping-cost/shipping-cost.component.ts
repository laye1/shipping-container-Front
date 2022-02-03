import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../rest-api.service";
import {ListCost} from "../list-cost";

@Component({
  selector: 'app-shipping-cost',
  templateUrl: './shipping-cost.component.html',
  styleUrls: ['./shipping-cost.component.css']
})
export class ShippingCostComponent implements OnInit {

  listCost:String[]= [
    "serviceTypeCost",
    "rangeCost",
    "totalCost"
  ]
  ;

  constructor(private restApiService:RestApiService) { }

  ngOnInit(): void {
    this.getPrices();
  }

  public getPrices(){
    this.restApiService.getCost().subscribe(data =>{
      this.listCost= data;
    })
  }
}
