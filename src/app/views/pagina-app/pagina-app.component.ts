import { Sensores } from './../../shared/interfaces/sensores';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-pagina-app',
  templateUrl: './pagina-app.component.html',
  styleUrls: ['./pagina-app.component.css']
})
export class PaginaAppComponent implements OnInit, OnDestroy {

  public test: boolean = false;
  public usuario_logueado: Usuario = LoginDialogComponent.usuario_logueado;
  public listadoSensores: Sensores[];

  constructor(private router: Router, private apiService: ApiService){
    this.listadoSensores = [ ];
  }

  ngOnInit(): void {
    console.log(this.usuario_logueado);
    this.listarSensores();
  }

  private listarSensores(): void {
    this.apiService.get_sensores(this.usuario_logueado).subscribe(

      (sensores: Sensores[]) => {

        if(sensores.length != 0) {

          console.log(sensores);
          this.test = true;
          this.listadoSensores = sensores;
        }

      },
      () =>{
        console.log('error');
      }
    )
  }

  ngOnDestroy(): void {
  
  }

}


