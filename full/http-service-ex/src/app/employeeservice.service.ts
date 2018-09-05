import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iemployee} from './app.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private url1= "http://www.mocky.io/v2/5b7d64af33000010004a02a8?mocky-delay=1900ms";
  constructor(private http:HttpClient) { }


  getEmployee():Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this.url1);
  }


}
