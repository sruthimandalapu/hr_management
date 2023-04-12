import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { PayrollComponent } from './payroll/payroll.component';
import { DocumentationComponent } from './documentation/documentation.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
@NgModule({
  declarations: [
    AppComponent,
    AnalysisComponent,
    EmployeeComponent,
    AttendanceComponent,
    PayrollComponent,
    DocumentationComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    DeleteemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
