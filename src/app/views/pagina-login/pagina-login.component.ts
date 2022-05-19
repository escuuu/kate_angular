import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/shared/classes/usuario';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {
  public usuario : Usuario;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor( ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void{

  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Email no válido' : '';
  }


}
