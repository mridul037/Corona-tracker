import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
   url=`http://api.coronastatistics.live`;
  constructor(private http: HttpClient) { }
   public userName=new Subject<any>();
   getAll(){
   return   this.http.get(`${this.url}/all`);
   }

   
}
