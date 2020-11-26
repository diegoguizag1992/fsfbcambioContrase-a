import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambiocontraseniaComponent } from './component/logeado/cambiocontrasenia/cambiocontrasenia.component';

const routes: Routes = [
  {
    path: 'solicitud',
    component: CambiocontraseniaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
