import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*string interpolation*/
 
  title = 'ICTA Kerala';
  title1= 'Marklist';
  name='';
  college='';
  candidatecode='';
  semester='';
  subject1name='';
  subject2name='';
  subject3name='';
  subject1marks;
  subject2marks;
  subject3marks;
  subject1total;
  subject2total;
  subject3total;
  percentage1;
  percentage2;
  percentage3;
  grade1:string='';
  grade2:string='';
  grade3:string='';
  status:string=''
  
  
    

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

    this.percentage1=(this.subject1marks/this.subject1total)*100
    this.percentage2=(this.subject2marks/this.subject2total)*100
    this.percentage3=(this.subject3marks/this.subject3total)*100

    if (this.percentage1>=95) {
     this.grade1='S';
    }
    else if (95>this.percentage1 && this.percentage1>=90){
    this.grade1='A+';    
  }
  else if (90>this.percentage1 && this.percentage1>=85){
    this.grade1='A';    
  }
  else if (85>this.percentage1 && this.percentage1>=80){
    this.grade1='B+';    
  }
  else if (80>this.percentage1 && this.percentage1>=75){
    this.grade1='B';    
  }
  else if (75>this.percentage1 && this.percentage1>=70){
    this.grade1='C+';    
  }
  else if (70>this.percentage1 && this.percentage1>=65){
    this.grade1='C';    
  }
  else if (65>this.percentage1 && this.percentage1>=60){
    this.grade1='D+';    
  }
  else if (60>this.percentage1 && this.percentage1>=55){
    this.grade1='D';    
  }
  else if (55>this.percentage1 && this.percentage1>=50){
    this.grade1='E';    
  }
  else if (this.percentage1 <50){
    this.grade1='F';    
  }

  if (this.percentage2>=95) {
    this.grade2='S';
   }
   else if (95>this.percentage2 && this.percentage2>=90){
   this.grade2='A+';    
 }
 else if (90>this.percentage2 && this.percentage2>=85){
   this.grade2='A';    
 }
 else if (85>this.percentage2 && this.percentage2>=80){
   this.grade2='B+';    
 }
 else if (80>this.percentage2 && this.percentage2>=75){
   this.grade2='B';    
 }
 else if (75>this.percentage2 && this.percentage2>=70){
   this.grade2='C+';    
 }
 else if (70>this.percentage2 && this.percentage2>=65){
   this.grade2='C';    
 }
 else if (65>this.percentage2 && this.percentage2>=60){
   this.grade2='D+';    
 }
 else if (60>this.percentage2 && this.percentage2>=55){
   this.grade2='D';    
 }
 else if (55>this.percentage2 && this.percentage2>=50){
   this.grade2='E';    
 }
 else if (this.percentage2 <50){
   this.grade2='F';    
 }

 if (this.percentage3>=95) {
  this.grade3='S';
 }
 else if (95>this.percentage3 && this.percentage3>=90){
 this.grade3='A+';    
}
else if (90>this.percentage3 && this.percentage3>=85){
 this.grade3='A';    
}
else if (85>this.percentage3 && this.percentage3>=80){
 this.grade3='B+';    
}
else if (80>this.percentage3 && this.percentage3>=75){
 this.grade3='B';    
}
else if (75>this.percentage3 && this.percentage3>=70){
 this.grade3='C+';    
}
else if (70>this.percentage3 && this.percentage3>=65){
 this.grade3='C';    
}
else if (65>this.percentage3 && this.percentage3>=60){
 this.grade3='D+';    
}
else if (60>this.percentage3 && this.percentage3>=55){
 this.grade3='D';    
}
else if (55>this.percentage3 && this.percentage3>=50){
 this.grade3='E';    
}
else if (this.percentage3 <50){
 this.grade3='F';    
}

if ((this.percentage1>=55) && (this.percentage2>=55) && (this.percentage3>=55)) {
this.status='Passed'  
}
else {
  this.status='Failed'
}

}}
