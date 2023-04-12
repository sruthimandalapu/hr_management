import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnalysisComponent} from './analysis/analysis.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {EmployeeComponent} from './employee/employee.component';
import {PayrollComponent} from './payroll/payroll.component';
import {AddemployeeComponent} from './addemployee/addemployee.component';
import {EditemployeeComponent} from './editemployee/editemployee.component';
import {DeleteemployeeComponent} from './deleteemployee/deleteemployee.component';
const routes: Routes = [
  {path:'',redirectTo:'employee',pathMatch:'full'},
  {path:'analysis/:id',component:AnalysisComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'documentation',component:DocumentationComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'payroll',component:PayrollComponent},
  {path:'addemployee',component:AddemployeeComponent},
  {path:'editemployee/:id',component:EditemployeeComponent},
  {path:'deleteemployee/:id',component:DeleteemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
