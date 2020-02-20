import { Bike } from './../../../bike';
import { BikeServiceService } from './../bike-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router, ParamMap } from '@angular/router'




@Component({
  selector: 'app-update-bike',
  templateUrl: './update-bike.component.html',
  styleUrls: ['./update-bike.component.css']
})
export class UpdateBikeComponent implements OnInit {
  public id;
  data:object={};
  bikes:object={};

  private headers = new Headers({'content-Type':'application/json'});
  constructor(private http:HttpClient,private route:ActivatedRoute,
    private router:Router,private bikesrv:BikeServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.id= param['id']
      console.log(this.id)

    })
    //fetch
    console.log(this.id)
    const url=`http://localhost:5500/bike/${this.id}`;
     return this.http.get<Bike[]>(url).subscribe(
       data=>{
              this.bikes=data
       });
    
 
    
    


  }
  updateBike(product){
        this.data={
          "name":product.name,
          "cc":product.cc,
          "color":product.color,
          "price":product.price
        } 
        const url=`http://localhost:5500/bike/${this.id}`;
        this.http.put(url,this.data).toPromise().then(()=>{
          console.log("updated");
        });           
  }


}
