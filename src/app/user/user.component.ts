import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private api:ApiService){

    api.user().subscribe(
      (response) =>
      {
        this.user =response
      }
    )

  }
  user:any = []
}
