import { StudentsService } from './../../core/services/students/students.service';
import { Students } from './../../core/services/students/students.model';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit{

  public students: Students[] = [];

  constructor(
    private studentsService: StudentsService
  ) {}

  public ngOnInit() {
    this.studentsService.getStudents().subscribe((studentsFromApi) => {
      this.students = studentsFromApi;
    })
  }

  public removeStudent(id?: string) {
    //si es distinto el id retorna todo
    if(!id) {return};
    this.studentsService.deleteStudent(id).pipe(
      //concatenamos una peticion a otra, con el switch
      //primero retornamos todos los productos, y ejecutamos el delete
      //y despues retornamos con el get los estudiantes
      switchMap((student) => {
        return this.studentsService.getStudents();
      }) 
      //nos subscrimos para ver los cambios y decirle que nuestra variable
      //de estudiantes es igual a el array con los estudiantes
      //ya con los cambios aplicados
    ).subscribe((studentsFromApi) => {
      this.students = studentsFromApi;
    })
  }

}
