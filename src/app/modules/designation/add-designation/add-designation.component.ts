import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxLoadingComponent, NgxLoadingModule } from 'ngx-loading';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-designation',
  standalone: true,
  imports: [CommonModule,NgxLoadingModule,ReactiveFormsModule],
  templateUrl: './add-designation.component.html',
  styleUrl: './add-designation.component.scss'
})
export class AddDesignationComponent implements OnInit{
  isLoading = false;
  designationDetailsForm:FormGroup;
  isEdit:false;
  constructor(private fb:FormBuilder,public ref: DynamicDialogRef){
    this.designationDetailsForm = this.fb.group({
      designationName: ['', [Validators.required,Validators.minLength(4)]],
    });
  }
  ngOnInit(): void {
    
  }
  Submit(){}

  close(){
    this.ref.close();
  }
}
