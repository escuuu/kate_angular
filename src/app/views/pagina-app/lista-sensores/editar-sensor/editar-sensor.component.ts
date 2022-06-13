import { Component, Input, OnInit } from '@angular/core';
import { Sensores } from 'src/app/shared/interfaces/sensores';
import { ListaSensoresComponent } from '../lista-sensores.component';

@Component({
  selector: 'app-editar-sensor',
  templateUrl: './editar-sensor.component.html',
  styleUrls: ['./editar-sensor.component.css']
})
export class EditarSensorComponent implements OnInit {

  public sensor_especifico: Sensores = ListaSensoresComponent.sensor_dialog;

  constructor() {
    this.sensor_especifico = {
      id_sensor: '',
      nombre_sensor: '',
      descripcion_sensor: '',
      latitude: '',
      longitude: '',
      grupo_id: '',
      descripcion_grupo: '',
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
      particulas: '',
    }
  }

  ngOnInit(): void {
  }

}
