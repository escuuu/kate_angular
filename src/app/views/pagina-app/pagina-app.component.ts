import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-pagina-app',
  templateUrl: './pagina-app.component.html',
  styleUrls: ['./pagina-app.component.css']
})
export class PaginaAppComponent implements OnInit, OnDestroy {

  public test: boolean = false
  public usuario_logueado: Usuario = LoginDialogComponent.usuario_logueado;

  constructor(){
  }

  ngOnInit(): void {
    console.log(this.usuario_logueado);
  }

  ngOnDestroy(): void {
    
  }

}
