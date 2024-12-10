import { Component, OnInit } from '@angular/core';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [TableModule,CommonModule,InputTextModule,ButtonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers:[DialogService]
})
export class EmployeeComponent implements OnInit{
  isLoading = false;
  employeeData = [
    {
      employeeId: 'E001',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      email: 'john.doe@example.com',
      mobile: '1234567890',
      dateOfJoining: new Date(2020, 0, 15),
      dateOfLeave: null,
      dateOfBirth: new Date(1990, 5, 24),
      salary: 50000,
    },
    {
      employeeId: 'E002',
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'Female',
      email: 'jane.smith@example.com',
      mobile: '9876543210',
      dateOfJoining: new Date(2021, 2, 10),
      dateOfLeave: null,
      dateOfBirth: new Date(1992, 8, 15),
      salary: 60000,
    },
  ];
  

  constructor(public dialogService:DialogService){

  }
  ngOnInit(): void {
    
  }

  ref: DynamicDialogRef | undefined;

  show() {
      this.ref = this.dialogService.open(AddEmployeeComponent, {
          closable: false,
          width: '55vw',
          height:'100%',
          contentStyle: { overflow: 'auto' },
      });
      this.ref.onClose.subscribe((data: any) => {
          if (data) {
             console.log('hello add component')
          } else {
    
          }
      });

  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }
}
