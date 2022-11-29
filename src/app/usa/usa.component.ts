import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent {
  constructor(private api:ApiService){

    api.usa().subscribe(
      (response) =>
      {
        this.usa =response
      }
    )

  }
  usa:any =[]
}
