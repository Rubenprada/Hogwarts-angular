import { Students } from './../../../core/services/students/students.model';

import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {


  @Input() public student?: Students;
  @Output() onRemove: EventEmitter<void> = new EventEmitter<void>();


  public removeStudent() {
    this.onRemove.emit()
  }

}