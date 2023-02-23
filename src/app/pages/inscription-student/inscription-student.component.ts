import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { students } from 'src/app/core/services/students/students.data';

@Component({
  selector: 'app-inscription-student',
  templateUrl: './inscription-student.component.html',
  styleUrls: ['./inscription-student.component.scss']
})
export class InscriptionStudentComponent implements OnInit {
  //variable formulario registro de estudiantes
  public studentForm?: FormGroup;
  //variable para previsualizar la imagen que meten
  public urlImg: string = '';
  constructor (
    private fb: FormBuilder
  ) {
    this.studentForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      avatar: new FormControl('', [Validators.required])
    })
  }

  //en cuanto carge el componente con el oninit cogemos el valor del avatar
  public ngOnInit() {
    this.studentForm?.get('avatar')?.valueChanges.subscribe((value) => {
      //si no hay valor devuelve vacio
      if (!value) {return;}
      //si hay valor la variable URLIMG coge ese valor
      this.urlImg = value;
    })
  }

  //funcion que escuchar cuando le damos al boton de registro
  public registerNewStudent () {
    //copiamos el array de estudiantes
    const studentCopy = [...students];
    //guardamos en variable los estudiantes ordenados por id
    const greaterId = studentCopy.sort((a, b) => {
      return parseInt(b.id, 10) - parseInt(a.id, 10)
    })[0].id;
    //variable para la nueva id que le sumamos a la mayor 1
    const newId = (parseInt(greaterId, 10) + 1).toString();
    console.log(this.studentForm?.value)
    console.log(students)
    //puseamos el nuevo estudiante
    students.push({
      ...this.studentForm?.value,
      id: newId
    });
    this.studentForm?.reset();
  }
  


}
