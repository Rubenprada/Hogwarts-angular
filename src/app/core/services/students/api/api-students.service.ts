import { Students } from './../students.model';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiStudents } from './api-students.models';



const API_STUDENTS_URL = 'https://63f3b7e3fe3b595e2ee8174b.mockapi.io/api/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentsService {

  constructor(
    private http: HttpClient
  ) { }

  //datos de la api brutos
  public getApiStudents(): Observable<ApiStudents[]> {
    return this.http.get<ApiStudents[]>(`${API_STUDENTS_URL}/students`)
  }
  //eliminar datos api
  public deleteApiStudents(id: string): Observable<ApiStudents> {
    return this.http.delete<ApiStudents>(`${API_STUDENTS_URL}/students/${id}`)
  }

  //crear nuevo
  public createApiStudents(body: Students): Observable<ApiStudents> {
    return this.http.post<ApiStudents>(`${API_STUDENTS_URL}/students`, body)
  }
}
