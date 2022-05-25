import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { RegistroDialogComponent } from '../registro-dialog/registro-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  public usuario : Usuario;
  hide = true;
  nombre = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private apiService: ApiService, private router: Router
  ) {
    this.usuario = new Usuario();
  }

  openRegisterDialog() {
    this.dialog.open(RegistroDialogComponent, {
      height: '600px',
      width: '450px'
    });
  }

  getErrorMessage() {
    if (this.nombre.hasError('required')) {
      return 'You must enter a value';
    }
    return this.nombre.hasError('email') ? 'Not a valid email' : '';
  }

  login(): void{
    this.apiService.login(this.usuario).subscribe(
      data => {
        console.log(data);
        if(data.length == 0) {
          alert('Usuario incorrecto');
        }
        else {
          this.dialogRef.close();
          this.router.navigate(['/sensores-app']);
        }
      },
      () => {
        console.error("Error al realizar el acceso");
      }
    )
  }


}
