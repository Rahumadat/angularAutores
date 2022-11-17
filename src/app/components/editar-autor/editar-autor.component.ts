import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {
  editarAutor : any;
  parametros: any;
  autor_id: any;
  autor: any;
  // autor: any = ({_id:'', name:''});

  constructor(private _autorService:AutorService,
              private _activatedRoute: ActivatedRoute,
              private _router: Router) { }


  ngOnInit(): void {
    this.parametros = this._activatedRoute.snapshot.params;
    this.autor_id = this.parametros.id;
    this.autor = this.buscarUno(this.autor_id);
  }

  buscarUno(id: String) {
    let observable = this._autorService.buscarUno(id);
    observable.subscribe(data => {
      console.log('data', data);

      this.autor = data;
    });
  }

  onSubmit(){
    const nombreAutor = { nombreAutor: this.autor.nombreAutor};
    const id = this.autor_id;
    let observable = this._autorService.editarAutor(id, nombreAutor);
    observable.subscribe(data => {
      console.log(data);
      this.goHome();
    });
  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
