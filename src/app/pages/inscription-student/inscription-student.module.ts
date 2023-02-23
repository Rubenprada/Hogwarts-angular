import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionStudentRoutingModule } from './inscription-student-routing.module';
import { InscriptionStudentComponent } from './inscription-student.component';


@NgModule({
  declarations: [
    InscriptionStudentComponent
  ],
  imports: [
    CommonModule,
    InscriptionStudentRoutingModule,
    //importacion para formularios
    ReactiveFormsModule,
    RouterModule
  ]
})
export class InscriptionStudentModule { }
