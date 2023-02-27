import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StudentsComponent } from './components/students/students.component';


import { FilterPipe } from './pipes/filter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    FilterPipe,
    StudentsComponent,
    
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
    
  ],
  exports: [
    FilterPipe, 
    StudentsComponent
  ]
})
export class SharedModule { }
