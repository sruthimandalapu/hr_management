import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  data:any;
  data1:any;
  s="";
  close=true;
  constructor(private http:HttpClient,private router:Router){
    this.http.get("http://localhost:3000/employee").subscribe((data)=>{this.data=data;});
  }
  search(val1:number,val2:string){
    let st1=val1.toString();
    let st2=val2.toLowerCase();
    if(st1.includes(this.s) || st2.includes(this.s.toLowerCase())){
      return true;
    }
    else{
      return false;
    }
  }
  submit(){
    this.router.navigate(["addemployee"]);
  }
  open(id:number){
    this.close=false;
    this.http.get(`http://localhost:3000/employee/${id}`).subscribe((data)=>{this.data1=data;});
  }
  close_click(){
    this.close=true;
  }
}
