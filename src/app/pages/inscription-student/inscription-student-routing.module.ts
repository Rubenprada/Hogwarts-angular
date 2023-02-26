import { ExitGuard } from './../../core/guard/exit.guard';
import { InscriptionStudentComponent } from './inscription-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: InscriptionStudentComponent,
    canDeactivate: [ExitGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriptionStudentRoutingModule { }
