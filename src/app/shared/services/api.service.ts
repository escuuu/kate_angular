import { Usuario } from './../classes/usuario';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Sensores } from '../interfaces/sensores';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl = 'https://sani-ki.yatuaire.ovh:444';

  constructor(private http: HttpClient) { }


  public login(usuario: Usuario) : Observable<any> {

    const nombre = usuario.nombre;
    const password = usuario.password;

    this.baseUrl = this.baseUrl + '/login.php?name=' +nombre+ '&password='+password;

    const resultado = this.http.get<any>(this.baseUrl);

    return resultado;
  }

  public registro(usuario: Usuario): Observable<any> {

    const nombre = usuario.nombre;
    const password = usuario.password;

    this.baseUrl = this.baseUrl + '/registro.php?name=' +nombre+ '&password='+password;

    const resultado = this.http.get<any>(this.baseUrl);

    return resultado;
  }

  public get_sensores(usuario: Usuario): Observable<Sensores[]> {

    const id_user = usuario.id;

    const resultado = this.http.get<Sensores[]>('https://sani-ki.yatuaire.ovh:444/get_sensores_angular.php?user='+id_user);

    return resultado;
  }
}
