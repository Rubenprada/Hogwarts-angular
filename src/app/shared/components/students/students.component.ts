import { Students } from './../../../core/services/students/students.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {


  @Input() public student?: Students;

}
