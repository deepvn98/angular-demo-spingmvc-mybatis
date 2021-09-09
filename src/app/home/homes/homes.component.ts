import { Employee } from './../../model/employee';
import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
employees:Employee[] = [];



  constructor(private employee:EmployeeService) 
  {
    this.employee.getAllEmployee().subscribe((data)=>{this.employees = data})

   }

  ngOnInit(): void {

  }

}
