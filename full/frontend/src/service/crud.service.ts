import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {  }

public addData(data) {
  const httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };
  return this.http.post("http://localhost:3000/customers/add", {"data": data}, httpOptions);
}
 
public getData() {
  return this.http.get("http://localhost:3000/customers/list");
}

public getSpecificData(name) {
  return this.http.get("http://localhost:3000/customers/profile/"+name);
}

public getDelete(id) {
  return this.http.get("http://localhost:3000/customers/delete/"+id);
}

public getUpdate(id, data) {
  const httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json'})
  };
  return this.http.patch("http://localhost:3000/customers/update/"+id, {"data": data}, httpOptions);
}

}
