import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private _http: HttpClient) { }

  buscarTodos() {
    return this._http.get(environment.serviceGetbuscarTodos);
  }

  buscarUno(id:String) {
    let url= `${environment.serviceGetbuscarUno}/${id}`;
    return this._http.get(url);
  }

  nuevoAutor(nombreAutor:String){
    let autor = ({nombreAutor: nombreAutor})
    return this._http.post(environment.serviceGetnuevoAutor,autor);
  }

  borrarAutor(id:String) {
    let url= `${environment.serviceGetborrar}/${id}`;
    return this._http.delete(url);
  }

  editarAutor(id:String, name: any) {
    let url= `${environment.serviceGetactualizar}/${id}`;
    return this._http.put(url, name);
    }
}


