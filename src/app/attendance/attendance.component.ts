import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent {
  s="";
  find=false;
  data:any;
  data1:any;
  january:any;
  february:any;
  march:any;
  december:any;
  november:any;
  arr1:string[]=[];
  arr2:string[]=[];
  constructor(private http:HttpClient){

  }
  submit(){
    this.http.get("http://localhost:3000/employee").subscribe((data)=>{this.data=data;});
    for(var i in this.data){
      alert(this.data[i].fullname);
      if(this.data[i].fullname.toLowerCase().includes(this.s) || this.data[i].employeeid.includes(this.s)){
        this.data1=this.data[i];
        this.find=true;
        break;
      }
    }
    //worked hours
    this.november=this.data1.attendeddays.Nov_2022*8;
    this.december=this.data1.attendeddays.Dec_2022*8;
    this.january=this.data1.attendeddays.Jan_2023*8;
    this.february=this.data1.attendeddays.Feb_2023*8;
    this.march=this.data1.attendeddays.Mar_2023*8;
    var arr={"November":this.november,"December":this.december,"January":this.january,"February":this.february,"March":this.march};
    var a=this.sorting(arr);
    var p=0;
    for(let key in a){
      this.arr1[p]=a[key][0];
      p+=1;
    }
    //leave hours
    this.november=this.data1.leavedays.Nov_2022*8;
    this.december=this.data1.leavedays.Dec_2022*8;
    this.january=this.data1.leavedays.Jan_2023*8;
    this.february=this.data1.leavedays.Feb_2023*8;
    this.march=this.data1.leavedays.Mar_2023*8;
    var arr={"November":this.november,"December":this.december,"January":this.january,"February":this.february,"March":this.march};
    var a=this.sorting(arr);
    var p=0;
    for(let key in a){
      this.arr2[p]=a[key][0];
      p+=1;
    }
  }
  sorting(originalData:any){
    let sortedData:any[] = [];
    Object.keys(originalData)
        .sort((a, b) => (originalData[a] > originalData[b] ? 1 : -1))
        .map(x => {
        console.log(x, originalData[x]);
        sortedData.push([x, originalData[x]]);
        });
        return sortedData.reverse();
  }
}
