import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/shared/services/api.service';
import { Frigorificos } from 'src/app/shared/interfaces/frigorificos';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-frigos',
  templateUrl: './lista-frigos.component.html',
  styleUrls: ['./lista-frigos.component.css']
})
export class ListaFrigosComponent implements OnInit {

  @Input() public frigo: Frigorificos;
  t1 = 0;
  t2 = 0;
  t3 = 0;
  al = '';
  aa = '';
  ts = '';
  ts_final = '';
  st = 0;
  s1 = 0;
  s2 = 0;
  s3 = 0;
  name = '';
  info = '';

  constructor(private dialog: MatDialog, private apiService: ApiService) { 
    this.frigo = {
      id_frigo: '',
      nombre_frigo: '',
      descripcion_frigo: '',
      latitude: '',
      longitude: '',
      grupo_id: '',
      descripcion_grupo: '',
      id_usuario: '',
      nombre_usuario: '',
      admin: '',
      frigo_tipo: '',
      ts: '',
      event: '',
      st: '', // status
      dout: '',
      din: '',
      al: '', // alarma visualizada en la pantalla
      t1: '', // temperaturas
      t2: '',
      t3: '',
      s1: '', // contadores de mantenimiento en mins
      s2: '',
      s3: '',
      aa: '', //alarmas activas
      ts_final: ''
    }
  }


  get_al():void {
    // CÓDIGOS DE ALARMA >>>>>>>>>>>>>>>>>>>>
        /*  1 AL00 Mancanza rete
            2 AL01 Sonda S1 guasta
            3 AL02 Sonda S2 guasta
            4 AL03 Allarme scongelamento
            5 AL04 Allarme congelamento
            6 AL05 Allarme alta temperatura
            7 AL06 Sonda S3 guasta
            8 Door Porta aperta
            9 AL70 Allarme batteria
            10 AL71 Alimentazione a batteria
            11 ErPar Errore incongruenza parametri
            12 DefPar Errore memoria parametri
            13 Full Memory Memoria registrazioni piena
            14 Clock Orologio guasto
            15 AM1 Pulizia condensatore
            16 AM2 Controllo generale
            17 AM3 Sicurezza  
        */
    this.al = this.frigo.al;
    //this.al = '0';
    if(this.al == '512') {
      this.al = 'Falta de tensión o batería averiada.'
    }
  }

  get_ts(): void {
    this.ts = this.frigo.ts;
    this.ts_final = this.ts.substring(0, 19);
  }

  get_name(): void {
    this.name = this.frigo.nombre_frigo;
  }

  get_info(): void {
    this.info = this.frigo.descripcion_frigo;
  }

  ngOnInit(): void {
    this.t2 = Number(this.frigo.t2)/10;
    this.t1 = Number(this.frigo.t1)/10;
    this.t3 = Number(this.frigo.t3)/10;
    this.aa = this.frigo.aa;
    this.s1 = Number(this.frigo.s1)/60/60/24;
    this.s2 = Number(this.frigo.s2)/60/60/24;
    this.s3 = Number(this.frigo.s3)/60/60/24;
    this.st = Number(this.frigo.st);
    this.get_al();
    this.get_ts();
    this.get_name();
    this.get_info();
  }
}
