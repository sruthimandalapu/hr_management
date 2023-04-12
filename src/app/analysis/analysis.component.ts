import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  data:any;
  data1:any;
  id:any;
  department:string="";
  count=0;
  age=0;
  salary=0;
  skills:string[]=[];
  skill:string="";
  constructor(private http:HttpClient,private route:ActivatedRoute){
    this.route.paramMap.subscribe((param)=>{var id=String(param.get('id')); this.id=id;});
    if(this.id=="production"){
      this.department="Production Department";
    }
    else if(this.id=="business"){
      this.department="Business Development";
    }
    else if(this.id=="sales"){
      this.department="Sales & Marketing";
    }
    else if(this.id=="purchasing"){
      this.department=="Purchasing & Sourcing";
    }
    else{
      this.department="Operations";
    }
    this.http.get("http://localhost:3000/employee").subscribe({
      next:(data)=>{
        this.data=data;
        for(var i in this.data){
          let value=this.data[i];
          if(value.department.toLowerCase().includes(this.id)){
            this.count+=1;
            this.age+=value.age;
            this.salary+=value.salary;
            this.department=value.department;
            let p=value.skillsets.split(",");
            for(var j in p){
              this.skills.push(p[j]);
            }
          }
        }
        this.age=this.age/this.count;
        this.salary=this.salary/this.count;
        this.get_skills(this.skills);
      }
  });
  }
  get_skills(arr:string[]){
    let f:string="";
    let s:string="";
    let t:string="";
    let first:number=0;
    let second:number=0;
    let third:number=0;
    for(var i in arr){
        let c=0;
        for(var j in arr){
            if(arr[i]==arr[j])
            c+=1;
        }
        if(first<=c){
            console.log("first: "+i);
            if(first!=c){
                third=second;
                t=s;
                second=first;
                s=f;
                first=c;
                f=arr[i];
            }
            else if(s=="" && f!=arr[i]){
                s=arr[i];
                second=first;
            }
            else if(t=="" && f!=arr[i] && s!=arr[i]){
                t=arr[i];
                third=second;
            }
        }
        else if(second<=c){
            console.log("second: "+i);
            if(second!=c){
                third=second;
                t=s;
                second=c;
                s=arr[i];
            }
            else if(t=="" && s!=arr[i]){
                t=arr[i];
                third=second;
            }
        }
        else if(third<=c){
            console.log("third: "+i);
            third=c;
            t=arr[i];
        }
    }
    console.log(f,s,t);
    if(s==""){
      this.skill=f;
    }
    else if(t==""){
      this.skill=f+", "+s;
    }
    else{
      this.skill=f+", "+s+", "+t;
    }
    console.log(this.skill);
  }


}
