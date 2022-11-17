import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarAutorComponent } from './components/borrar-autor/borrar-autor.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { ListarAutorComponent } from './components/listar-autor/listar-autor.component';
import { NuevoAutorComponent } from './components/nuevo-autor/nuevo-autor.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: ListarAutorComponent},
  { path: 'nuevo', component: NuevoAutorComponent},
  { path: 'editarautor/:id', component: EditarAutorComponent},
  { path: 'borrar/:id', component: BorrarAutorComponent},
  //En este orden deben agregarse estas rutas
  // redirige adirectorio web Raiz si no hay nada en la URL
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // los ** atrapará todo lo que no coincidió con ninguno de las rutas anteriores
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
