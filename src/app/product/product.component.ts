import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private api:ApiService){

    api.product().subscribe(
      (response) =>
      {
        this.data =response
      }
    )

  }
  data:any = []}