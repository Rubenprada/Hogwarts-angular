import { students } from './../../core/services/students/students.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent {

  public students = students;

}
