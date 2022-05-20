import { Usuario } from './../classes/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUrl:string = 'https://kate.yatuaire.ovh:444'

  constructor(private HttpClient: HttpClient) { }

  public login(usuario: Usuario) {

    const nombre = usuario.nombre;
    const password = usuario.password;

    this.baseUrl = this.baseUrl + '/login.php?name=' +nombre+ '&password='+password;
    const resultado = this.HttpClient.get<any>(this.baseUrl);

    return resultado;
  }

  public registro(usuario: Usuario) {

    const nombre = usuario.nombre;
    const password = usuario.password;

    this.baseUrl = this.baseUrl + '/registro.php?name=' +nombre+ '&password='+password;
    const resultado = this.HttpClient.get<any>(this.baseUrl);

    return resultado;
  }
}
