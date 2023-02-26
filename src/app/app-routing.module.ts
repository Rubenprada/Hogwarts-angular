import { AuthGuard } from './core/guard/auth.guard';
import { HomeComponent } from './pages/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //ruta inicial la home, desde ahí nos movemos
  {
    path: '',
    redirectTo: 'home',
    //coinicida con la ruta 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'character-list',
    loadChildren: () => import('./pages/character-list/character-list.module').then(m => m.CharacterListModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path:'house-list',
    loadChildren: () => import('./pages/houses-list/houses-list.module').then(m => m.HousesListModule)
  },
  {
    path: 'students-list',
    loadChildren: () => import('./pages/students-list/students-list.module').then(m => m.StudentsListModule)
  },
  {
    path: 'inscription-student',
    loadChildren: () => import('./pages/inscription-student/inscription-student.module').then(m => m.InscriptionStudentModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'my-soons',
    loadChildren: () => import('./pages/my-soons/my-soons.module').then(m => m.MySoonsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login/login.module').then(m => m.LoginModule)
  },
  {
    //para rutas no especificadas
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundModule)
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
