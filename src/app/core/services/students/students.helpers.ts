import { Students } from './students.model';
import { ApiStudents } from './api/api-students.models';


export function transformStudent(apiStudents: ApiStudents): Students {
    delete apiStudents.createdAt;
    return apiStudents;
}