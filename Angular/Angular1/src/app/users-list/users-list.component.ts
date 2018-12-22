import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

   fetchdata=[]


  constructor(private apiservice:ApiserviceService) { 
  this.ongetdata();  
    
  }
  ongetdata(){

    this.apiservice.getServerData().subscribe(
(newData:any[])=>{console.log(newData);this.fetchdata=newData},
(error)=>console.log(error)
    );

}

  ngOnInit() {
  }

}
