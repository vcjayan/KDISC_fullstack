import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICTA Kerala';
  title1='marklist';
  name='';
  college='';
  candidatecode='';
  semester='';
  subject1name='';
  subject2name='';
  subject3name='';
  subject1marks='';
  subject2marks='';
  subject3marks='';
  subject1total='';
  subject2total='';
  subject3total='';

  

  onSubmit(form:NgForm){
    console.log(form);

    this.name=form.value.getname;
    this.college=form.value.getcollege;
    this.candidatecode=form.value.getcandidatecode;
    this.semester=form.value.getsemester;
    this.subject1name=form.value.getsub1name;
    this.subject2name=form.value.getsub2name;
    this.subject3name=form.value.getsub3name;
    this.subject1marks=form.value.getsub1marks;
    this.subject2marks=form.value.getsub2marks;
    this.subject3marks=form.value.getsub3marks;
    this.subject1total=form.value.getsub1total;
    this.subject2total=form.value.getsub2total;
    this.subject3total=form.value.getsub3total;

   console.log
  }
  

}
