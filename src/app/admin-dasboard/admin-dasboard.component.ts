import { Component, OnInit } from '@angular/core';
import {RestApiService} from "../rest-api.service";

import {ListShipping} from "../list-shipping";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dasboard',
  templateUrl: './admin-dasboard.component.html',
  styleUrls: ['./admin-dasboard.component.css']
})
export class AdminDasboardComponent implements OnInit {

  listShippings: ListShipping[] | undefined ;

  constructor(private restApiService:RestApiService,private router:Router) { }

  ngOnInit(): void {

    this.listShips();
  }

  public listShips(){

    this.restApiService.getShipping().subscribe(data=>{
      this.listShippings =data
    })


  }

  updateShip(id:number) {

    this.router.navigate(['update-ship',id]);

  }

  deleteShip(id: number) {

    this.restApiService.deleteShip(id).subscribe(data=>{

      console.log(data);
      this.listShips();
    })

  }
}
