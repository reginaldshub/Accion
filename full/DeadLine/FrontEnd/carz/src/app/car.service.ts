import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarService {
url = 'http://localhost:3001/';
  constructor(private http: HttpClient) { }

addProduct(name, price, productImage, company, parts){  
  // const product = {
  //   name: name,
  //   price: price
  //   // productImage: productImage
  // }
  const uploadData = new FormData();
  uploadData.append('name', name);
  uploadData.append('price', price);
  uploadData.append('company', company);
  uploadData.append('parts', parts);
  uploadData.append('productImage', productImage, productImage.name );
 
  console.log(uploadData);
  return this.http.post('http://localhost:3001/products', uploadData);
}

get(){
  return this.http.get('http://localhost:3001/products');
}

getSpec(name){
  return this.http.get("http://localhost:3001/products/"+name);
}

delete(id){
  return this.http.delete(`http://localhost:3001/products/${id}`);
}

update(id, data){
  return this.http.patch(`http://localhost:3001/products/${id}`, data);
}
}
