import { StudentsListModule } from './../pages/students-list/students-list.module';
import { StudentsComponent } from './components/students/students.component';


import { FilterPipe } from './pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    FilterPipe,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    
    
  ],
  exports: [
    FilterPipe, 
    StudentsComponent
  ]
})
export class SharedModule { }
