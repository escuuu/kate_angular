import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

export const DEFAULT_LAT = 40.31855159471087;
export const DEFAULT_LON =  -3.755234181416796;
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-pagina-mapa',
  templateUrl: './pagina-mapa.component.html',
  styleUrls: ['./pagina-mapa.component.css']
})
export class PaginaMapaComponent implements OnInit {
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    //configuración del mapa
    var myIcon =L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = myIcon;

    var mymap = L.map('map').setView([this.lat, this.lon], 18);
                    const mapa_princi = mymap;
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(mapa_princi);
                    var name ="Ourense, 5, Local 5, 28914 Leganés, Madrid";
                    var tlfn = "91 014 55 30";
                    mapa_princi.flyTo([this.lat, this.lon]);
                    const marker_princi = L.marker([this.lat, this.lon], {icon: myIcon}).addTo(mapa_princi).bindPopup("<strong style='color:black'>C/ "+name+"</strong>"+"<br>"+"<a class='inicio_class font2' href='mailto:administracion@mulesol.es?Subject=Solicito información'>Contactar por email</a>"+"<br>"+"<strong style='color:black'>Tlfn: "+ tlfn+"</strong>");
                    marker_princi.openPopup();
  }
}


