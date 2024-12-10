import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit{
  employeeForm:FormGroup


  constructor(private fb: FormBuilder,public ref: DynamicDialogRef) {
    this.employeeForm = this.fb.group({
      employeeId: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dateOfJoining: ['', Validators.required],
      dateOfLeave: [''],
      dateOfBirth: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }
  submit(){

  }

  
  close(){
    this.ref.close();
  }
}
