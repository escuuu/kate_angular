import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';


@Component({
  selector: 'app-editar-sensor',
  templateUrl: './editar-sensor.component.html',
  styleUrls: ['./editar-sensor.component.css']
})
export class EditarSensorComponent implements OnInit {

  selectedSensor$ = this.apiService.selectedSensor$;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

}
