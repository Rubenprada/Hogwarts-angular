import { LoadingService } from './../loading/loading.service';
import { ApiStudents } from './api/api-students.models';
import { Observable, map, tap } from 'rxjs';
import { ApiStudentsService } from './api/api-students.service';
import { Injectable } from '@angular/core';
import { Students } from './students.model';
import { transformStudent } from './students.helpers';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private apiStudentsService: ApiStudentsService,
    private loadingService: LoadingService
  ) { }

  public getStudents(): Observable<Students[]> {
    this.loadingService.showLoading();
    return this.apiStudentsService.getApiStudents().pipe(
      map((students: ApiStudents[]) => {
        return students.map((student) => transformStudent(student))
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }

  public deleteStudent(id: string): Observable<Students> {
    return this.apiStudentsService.deleteApiStudents(id).pipe(
      map((student) => transformStudent(student))
    )
  }

}
