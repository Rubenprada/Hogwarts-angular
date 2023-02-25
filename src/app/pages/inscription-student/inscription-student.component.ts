import { Router } from '@angular/router';
import { MessageService } from './../../core/services/messages/message.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { students } from 'src/app/core/services/students/students.data';
import { mySoons } from 'src/app/core/services/mySoons/mySoons.data';

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
  //variable para mostrar aviso de creacion correcta
  public formMessage: string = '';

  constructor (
    private fb: FormBuilder,
    private messageService: MessageService,

  ) {
    this.studentForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
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
    const soonsCopy = [...mySoons];
    //guardamos en variable los estudiantes ordenados por id
    const greaterId = soonsCopy.sort((a, b) => {
      return parseInt(b.id, 10) - parseInt(a.id, 10)
    })[0].id;
    //variable para la nueva id que le sumamos a la mayor 1
    const newId = (parseInt(greaterId, 10) + 1).toString();
    
    //puseamos el nuevo estudiante
    mySoons.push({
      ...this.studentForm?.value,
      id: newId
    });
    this.messageService.setMessage('la inscripción ha sido un exito');
    this.formMessage = this.messageService.getMessage();
    this.studentForm?.reset();
    
  }
  


}
