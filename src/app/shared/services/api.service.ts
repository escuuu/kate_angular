import { Usuario } from './../classes/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Sensores } from '../interfaces/sensores';
import { BehaviorSubject } from 'rxjs';


const initSensor: Sensores = {
  id_sensor: '',
  nombre_sensor: '',
  descripcion_sensor: '',
  latitude: '',
  longitude: '',
  grupo_id: '',
  descripcion_grupo: '',
  nombre_grupo: '',
  id_usuario: '',
  nombre_usuario: '',
  admin: '',
  sensor_tipo: '',
  ts: '',
  co2: '',
  temperatura: '',
  humedad: '',
  presion: '',
  bateria: '',
  particulas: ''
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private sensor$ = new BehaviorSubject<Sensores>(initSensor);

  baseUrl = 'https://sani-ki.yatuaire.ovh:444';

  constructor(private http: HttpClient) { }


  //FUNCIONES CON LLAMADAS A LA API

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


  //FUNCIONES COMUNICACIÓN ENTRE COMPONENTES

  get selectedSensor$(): Observable<Sensores> {
    return this.sensor$.asObservable();
  }

  setSensor(sensor: Sensores): void {
    this.sensor$.next(sensor);
  }

  //FUNCIÓN PARA OBTENER UBICACIÓN
  getLocalization(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve ({
          lng: resp.coords.longitude,
          lat: resp.coords.latitude
        }
        )
      })
    })
  }
}
