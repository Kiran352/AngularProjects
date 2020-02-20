import { Bike } from './../../bike';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikeServiceService {
   url :string="http://localhost:5500/bike"
   bikes:[];
  constructor(private http:HttpClient) { }
 

  fetchData():Observable<Bike[]> {
    
      return this.http.get<Bike[]>(this.url);
  
   }
}
