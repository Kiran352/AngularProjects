import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  
  constructor(private http:HttpClient) { }
  

  confirmation:string="New Bike detail Added Successfully";
  isAdded:boolean=false;
  url="http://localhost:5500/bike";
  bikeObject:object={};
  
  addProduct= function(bike){
     this.bikeObject= {
       "name":bike.name,
       "cc":bike.cc,
       "color":bike.color,
       "price":bike.color
     }
     this.http.post(this.url,this.bikeObject)
     .subscribe((res:Response)=>{
        this.isAdded=true;
     })
   }
  
  
  ngOnInit() {
  }

}
