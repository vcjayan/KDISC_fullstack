import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Navbar1Component } from './navbar1/navbar1.component';
import { DisplayComponent } from './display/display.component';
import { RouterModule,Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ApiserviceService } from './apiservice.service';
import { HttpModule } from '@angular/http';
const appRoutes:Routes=[
{path:'',component:AppComponent},{path:'about',component:AboutComponent},{path:'users',component:UsersListComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar1Component,
    DisplayComponent,
    AboutComponent,
    MainComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ApiserviceService],
  bootstrap: [Navbar1Component,MainComponent]
})
export class AppModule { }
