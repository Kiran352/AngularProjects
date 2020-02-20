import { SubscribableOrPromise } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BikeServiceService } from './../bike-service.service';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { error } from 'util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bikesrv:BikeServiceService,private http:HttpClient) { }
  id:number;
  private headers = new Headers({'content-Type':'application/json'});
 
  Bikes=[];
  data;
  ngOnInit() {
    this.bikesrv.fetchData()
    .subscribe(
      data=>this.Bikes=data
    )

    
  }
  deleteBike=function(id) {
    if(confirm("are you sure?")){
      const url=`http://localhost:5500/bike/${id}`;
      this.http.delete(url).toPromise()
     .then(()=>{
              this.bikesrv.fetchData()
              .subscribe(
                data=>this.Bikes=data
              )
              
     }); 

    }

    
      }

      a(param) {
        this.b(param).then(d => this.data = d).catch(e => alert(e));
      }
  
  b(param) {
    const data = [1, 2];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return param?resolve(data):reject('API failed');
      }, 5000);
    });
  }
        
         
    
   
  

}
