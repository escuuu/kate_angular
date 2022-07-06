import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-editar-sensor',
  templateUrl: './editar-sensor.component.html',
  styleUrls: ['./editar-sensor.component.css']
})
export class EditarSensorComponent implements OnInit {

  selectedSensor$ = this.apiService.selectedSensor$;
  nombre = this.selectedSensor$;

  opcion: String = '';
  grupo: String[] = [
    'Oficina General',
    'Ofi1',
    'Ofi2'
  ];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  putLocalization(): void{
    this.apiService.getLocalization().then(
      resp => {
        console.log(resp.lat);
        console.log(resp.lng);
      }
    )
  }

}
