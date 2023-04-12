import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent {
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute){
    this.route.paramMap.subscribe(
      (param)=>{var id=Number(param.get('id'));this.submit(id);}
    );
  }
  submit(id:number){
    this.http.delete(`http://localhost:3000/employee/${id}`).subscribe({
      next:(data)=>{alert("Deleted Sucessfully!");this.router.navigate(['employee']);}
    });
  }
}
