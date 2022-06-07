import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.component.html',
  styleUrls: ['./pagina-registro.component.css']
})
export class PaginaRegistroComponent implements OnInit {
  public registerForm!: FormGroup;
  public usuario : Usuario;


  constructor( titulo: Title,
              private apiService: ApiService,
              private router: Router) {
    titulo.setTitle('Sani-Ki | Registro');
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]),
      confirmPassword: new FormControl('', Validators.required)
    }, { validators: confirmPasswordValidator});
  }

  onSubmit(): void {
    this.apiService.registro(this.usuario).subscribe(
      data => {
        console.log(data);
        if(data == 'false'){
          alert('El usuario ya está registrado');
        }
        else{
          this.router.navigate(['/iniciar-sesion']);
        }
      },
      () => {
        alert('La conexión a la base de datos ha  fallado');
      }
    )
  }
}

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? { confirmPassword: true } : { confirmPassword: false };
};

