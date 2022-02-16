import { Component, OnInit } from '@angular/core';

import {RestApiService} from "../rest-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Shipping} from "../shipping";
import {ListShipping} from "../list-shipping";




@Component({
  selector: 'app-update-shipping',
  templateUrl: './update-shipping.component.html',
  styleUrls: ['./update-shipping.component.css']
})
export class UpdateShippingComponent implements OnInit {


  id:number=0;


  shipping: Shipping = new Shipping();
  constructor(private restApiService:RestApiService,private route:ActivatedRoute,private  router:Router) { }

  ngOnInit(): void {


    this.id = this.route.snapshot.params['id'];
    this.restApiService.getShipById(this.id).subscribe(data=>{
      this.shipping = data;
    },error => {
      alert("Error")
    });


  }

  onSubmit() {

    this.restApiService.updateShip(this.id,this.shipping).subscribe(data=>{

      console.log(data);
      this.router.navigate(['/admin']);

    })

  }




}
