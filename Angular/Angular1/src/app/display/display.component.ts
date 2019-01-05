import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
@Input() name:string
@Input() college:string
@Input () candidatecode:string
@Input () semester:string
@Input () subject1name:string
@Input () subject2name:string
@Input () subject3name:string
@Input () subject1marks:string
@Input () subject2marks:string
@Input () subject3marks:string
@Input () subject1total:string
@Input () subject2total:string
@Input () subject3total:string
@Input () grade1:string
@Input () grade2:string
@Input () grade3:string
@Input () status:string



  constructor() { }

  ngOnInit() {
  }

}
