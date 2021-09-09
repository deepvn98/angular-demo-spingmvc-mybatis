import { Employee } from './../model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api= `${environment.API}`;

  constructor(private http:HttpClient) 
  {

   }

   getAllEmployee():Observable<Employee[]>{
     return this.http.get<Employee[]>(this.api+"home");
     
   }
}
