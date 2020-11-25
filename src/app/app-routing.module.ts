import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambiocontraseniaComponent } from './component/logeado/cambiocontrasenia/cambiocontrasenia.component';
import { RestablecerContrasenaComponent } from './component/logeado/restablecer-contrasena/restablecer-contrasena.component';

const routes: Routes = [
  {
    path: 'solicitud',
    component: CambiocontraseniaComponent
  },
  {
    path: 'restablecer',
    component: RestablecerContrasenaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
