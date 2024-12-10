import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AddDesignationComponent } from './add-designation/add-designation.component';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [TableModule,CommonModule,InputTextModule,ButtonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss',
  providers:[DialogService]
})
export class DesignationComponent implements OnInit {
  isLoading = false;
  companies = 'jashan';
  names = [ 'jashan', 'jashan', 'jashan', 'jashan']

  constructor(public dialogService:DialogService){

  }
  ngOnInit(): void {
    
  }

  ref: DynamicDialogRef | undefined;

  show() {
      this.ref = this.dialogService.open(AddDesignationComponent, {
          closable: false,
          width: '50vw',
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
