import { Component, OnInit } from '@angular/core';
import { AutorService } from 'src/app/services/autor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-autor',
  templateUrl: './nuevo-autor.component.html',
  styleUrls: ['./nuevo-autor.component.css']
})
export class NuevoAutorComponent implements OnInit {
nuevoAutor: any;
mensajeError: string = ""

  constructor(private _autorService: AutorService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this.nuevoAutor = { nombreAutor: ""};
  }

  onSubmit(){
    this.nuevo();
    this.nuevoAutor = { nombreAutor: ""};
  }

  nuevo() {
    if (this.nuevoAutor.nombreAutor ==""){
      this.mensajeError="Name is Required"
    } else if (this.nuevoAutor.nombreAutor < 3){
      this.mensajeError="El nombre del autor debe contener mas de 3 caracteres"
    }
    else {
      console.log('nombre autor', this.nuevoAutor.nombreAutor);
      let observable = this._autorService.nuevoAutor(this.nuevoAutor.nombreAutor);
      console.log('observable', observable);
      observable.subscribe(data => {
      console.log("Add our authors!", data);
      this.goHome();
    });
    }


  }

  goHome() {
    this._router.navigate(['/home']);
  }

}
