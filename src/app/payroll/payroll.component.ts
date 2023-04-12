import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent {
  data:any;
  data1:any;
  close=true;
  constructor(private http:HttpClient){
    this.http.get("http://localhost:3000/employee").subscribe((data)=>{this.data=data});
  }
  view(id:any){
    this.close=false;
    this.http.get(`http://localhost:3000/employee/${id}`).subscribe((data)=>{this.data1=data});
  }
  close_click(){
    this.close=true;
  }
}
