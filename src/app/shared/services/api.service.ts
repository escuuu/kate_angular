import { Usuario } from './../classes/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'http://kate.yatuaire.com:444';

  constructor(private http: HttpClient) { }

  public login(usuario: Usuario) : Observable<any> {

    const nombre = usuario.nombre;
    const password = usuario.password;

    const resultado = this.http.get<any>('/login.php?name=' +nombre+ '&password='+password);

    return resultado;
  }

  public registro(usuario: Usuario): Observable<any> {

    const nombre = usuario.nombre;
    const password = usuario.password;
    
    const resultado = this.http.get<any>('/registro.php?name=' +nombre+ '&password='+password);

    return resultado;
  }
}
