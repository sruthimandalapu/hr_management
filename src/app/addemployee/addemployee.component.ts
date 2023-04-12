import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  data:any;
  count=0;
  employee={
    id:this.count,
    employeeid:0,
    fullname:"",
    personalemailid:"",
    emailid:"",
    contactnumber:0,
    enterprise:"",
    dateofjoining:"",
    department:"",
    designation:"",
    dateofbirth:"",
    age:0,
    gender:"",
    state:"",
    city:"",
    street:"",
    pincode:0,
    qualication:"",
    passedoutyear:0,
    skillsets:"",
    workingdomain:"",
    experience:0,
    location:"",
    salary:0,
    bonus:0,
    professionaltax:250,
    employeepf:1800,
    employerpf:1800,
    variablepay:0
  };
  constructor(private http:HttpClient,private router:Router){
    this.http.get("http://localhost:3000/employee").subscribe((data)=>{this.data=data;});
    for(var i in this.data){
      this.count=this.data.id;
    }
    this.count+=1;
  }
  submit(){
    this.http.post("http://localhost:3000/employee",this.employee).subscribe({
      next:(data)=>{alert("Saved Successfully!");this.router.navigate(['employee']);}
    });
    
  }
}
