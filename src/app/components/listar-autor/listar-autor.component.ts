import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-listar-autor',
  templateUrl: './listar-autor.component.html',
  styleUrls: ['./listar-autor.component.css']
})
export class ListarAutorComponent implements OnInit {

  listaAutores: any;
  borrarResultado: any;

  constructor(private _autorService:AutorService) { }

  ngOnInit(): void {
    this.buscarTodos();
  }

  buscarTodos(){
    let observable = this._autorService.buscarTodos()
    observable.subscribe(data => {
    this.listaAutores = data;
    });
  }

  borrarAutor(id: String) {
    let observable = this._autorService.borrarAutor(id)
    observable.subscribe(data => {
      this.borrarResultado = data
      this.buscarTodos();
    });

  }

}
