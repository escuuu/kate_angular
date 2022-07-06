import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css'],
  providers: [ApiService]
})
export class PaginaLoginComponent implements OnInit {

  public usuario : Usuario;
  hide = true;
  nombre = new FormControl('', [Validators.required, Validators.email]);
  static usuario_logueado: Usuario;

  constructor(private apiService: ApiService, private router: Router, titulo: Title ) {
    titulo.setTitle('Sani-Ki | Iniciar Sesión');
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.nombre.hasError('required')) {
      return 'Campo obligatorio';
    }

    return this.nombre.hasError('email') ? 'Email no válido' : '';
  }

  login(): void{
    this.apiService.login(this.usuario).subscribe(
      data => {
        if(data.length == 0) {
          alert('Usuario incorrecto');
        }
        else {
          this.usuario.admin = data[0].admin;
          this.usuario.id = data[0].id;
          this.router.navigate(['/sensores-app']);
          PaginaLoginComponent.usuario_logueado = this.usuario;
        }
      },
      () => {
        console.error("Error al realizar el acceso");
      }
    )
  }




}
