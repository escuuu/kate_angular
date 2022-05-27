import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(private apiService: ApiService, private router: Router ) {
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

  onSubmit(): void{
    this.apiService.login(this.usuario).subscribe(
      data => {
        console.log(data);
        if(data[0].length == 0){
          alert('Usuario incorrecto');
        }
        else {
          this.router.navigate(['/sensores-app']);
        }
      },
      () => {
        console.error("Error al realizar el acceso");
      }
    )
  }




}
