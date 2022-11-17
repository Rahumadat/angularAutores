import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAutorComponent } from './components/listar-autor/listar-autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutorService } from './services/autor.service';
import { BorrarAutorComponent } from './components/borrar-autor/borrar-autor.component';
import { EditarAutorComponent } from './components/editar-autor/editar-autor.component';
import { NuevoAutorComponent } from './components/nuevo-autor/nuevo-autor.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAutorComponent,
    BorrarAutorComponent,
    EditarAutorComponent,
    NuevoAutorComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AutorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
