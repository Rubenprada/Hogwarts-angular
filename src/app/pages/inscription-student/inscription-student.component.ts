import { StudentsService } from './../../core/services/students/students.service';
import { MySoonsService } from './../../core/services/mySoons/my-soons.service';
import { Router } from '@angular/router';
import { MessageService } from './../../core/services/messages/message.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    private soonService: MySoonsService,
    private roter: Router,
    private studentsService: StudentsService

  ) {
    this.studentForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
      surname: new FormControl('', [Validators.required, Validators.pattern('[a-z A-Z]*')]),
      avatar: new FormControl('', [Validators.required]),
      
    })
  }

  //creamos una funcion para enviar los datos de los registros a la api
  saveSoon() {
    this.soonService.createSoon(this.studentForm?.value).subscribe();
    this.studentsService.createStudent(this.studentForm?.value).subscribe();
    //mandamos mensaje informativo
    this.messageService.setMessage('La inscripcion ha sido un exito, puede verlo en sus inscripciones como en los estudiantes');
    this.formMessage = this.messageService.getMessage();
    
    
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
  
}
