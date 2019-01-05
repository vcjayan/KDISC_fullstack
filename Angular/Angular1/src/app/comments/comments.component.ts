import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
fetchcomments=[]


  constructor(private apiservice:ApiserviceService) {
    this.ongetcomments();

    }    

   ongetcomments(){

    this.apiservice.getServercomments().subscribe(
      (newcomments:any[])=>{console.log(newcomments);this.fetchcomments=newcomments},
      (error)=>console.log(error)
    )
   }

  ngOnInit() {
  }

}
