import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsaComponent } from './usa/usa.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute : Routes =[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"usa",
    component:UsaComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"userinfo",
    component:UserDataComponent
  },
  {
    path:"quote",
    component:QuotesComponent
  },
  {
    path:"todo",
    component:TodoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    UsaComponent,
    ProductComponent,
    UserComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
