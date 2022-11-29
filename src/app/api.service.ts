import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  passenger = () =>
  {
    return this.http.get("https://api.instantwebtools.net/v1/passenger?page=0&size=30")
  }

  product = () =>
  {
    return this.http.get("https://dummyjson.com/products")
  }

  quotes = () =>
  {
    return this.http.get("https://dummyjson.com/quotes")
  }

  todo = () =>
  {
    return this.http.get("https://dummyjson.com/todos")
  }

  usa = () =>
  {
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  }

  user = () =>
  {
    return this.http.get("https://reqres.in/api/users?page=1")
  }

  userData = () =>
  {
    return this.http.get("https://dummyjson.com/users")
  }


  
}
