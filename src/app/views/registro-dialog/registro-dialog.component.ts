import { ApiService } from 'src/app/shared/services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Usuario } from 'src/app/shared/classes/usuario';
import { Router } from '@angular/router';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-registro-dialog',
  templateUrl: './registro-dialog.component.html',
  styleUrls: ['./registro-dialog.component.css']
})
export class RegistroDialogComponent implements OnInit {

  public registerForm!: FormGroup;
  public usuario : Usuario;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private apiService: ApiService,
              private router: Router,
              private dialogRef : MatDialogRef<RegistroDialogComponent>,
              private dialogLog : MatDialog) {
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
          this.dialogRef.close();
          this.dialogLog.open(LoginDialogComponent, {
            height: '600px',
            width: '450px'
          });
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
