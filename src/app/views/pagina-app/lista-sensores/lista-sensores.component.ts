import { NumberInput } from '@angular/cdk/coercion';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as Aos from 'aos';
import { Sensores } from 'src/app/shared/interfaces/sensores';
import { EditarSensorComponent } from './editar-sensor/editar-sensor.component';

@Component({
  selector: 'app-lista-sensores',
  templateUrl: './lista-sensores.component.html',
  styleUrls: ['./lista-sensores.component.css']
})
export class ListaSensoresComponent implements OnInit {

  public sensor_dialog! : Sensores;

  @Input() public sensor: Sensores;

  co2 = 0;
  co2_porcentaje = 0;

  temp = 0;

  humedad = 0;

  presion = 0;

  bat = 0;
  static sensor_dialog: Sensores;

  constructor(private dialog: MatDialog) {
    this.sensor = {
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
    Aos.init();
    this.get_co2();
    this.get_temp();
    this.get_humedad();
    this.get_presion();
    this.get_bateria();
  }

  get_co2():void {
    this.co2 = Number(this.sensor.co2);
    this.co2_porcentaje = this.co2 * 100 / 2500;
  }

  get_temp(): void {
    this.temp = Number(this.sensor.temperatura);
  }

  get_humedad(): void {
    this.humedad = Number(this.sensor.humedad);
  }

  get_presion():void {
    this.presion = Number(this.sensor.humedad);
    this.presion = this.presion * 100 / 2000;
  }

  get_bateria():void {
    this.bat = Number(this.sensor.bateria);
  }

  openEditDialog(): void {

    this.sensor_dialog = this.sensor;

    this.dialog.open(EditarSensorComponent, {
      height: '600px',
      width: '500px'
    });
  }
}
