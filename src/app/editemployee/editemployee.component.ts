import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {
  data:any;
  employee={
    id:0,
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
  id=0;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    this.route.paramMap.subscribe(
      (param)=>{var id=Number(param.get('id')); this.id=id;}
    );
    this.http.get<Employee>(`http://localhost:3000/employee/${this.id}`).subscribe((data)=>{this.employee=data;});
  }
  submit(){
    this.http.put(`http://localhost:3000/employee/${this.id}`,this.employee).subscribe({
      next:(data)=>{alert("Successfully Updated!");this.router.navigate(['employee']);}
    });
  }
}
interface Employee{
  id:number,
  employeeid:number,
  fullname:string,
  personalemailid:string,
  emailid:string,
  contactnumber:number,
  enterprise:string,
  dateofjoining:string,
  department:string,
  designation:string,
  dateofbirth:string,
  age:number,
  gender:string,
  state:string,
  city:string,
  street:string,
  pincode:number,
  qualication:string,
  passedoutyear:number,
  skillsets:string,
  workingdomain:string,
  experience:number,
  location:string,
  salary:number,
  bonus:number,
  professionaltax:number,
  employeepf:number,
  employerpf:number,
  variablepay:number
}
