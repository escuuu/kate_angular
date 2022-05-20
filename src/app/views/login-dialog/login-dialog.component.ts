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

  login(): void{
    this.apiService.login(this.usuario).subscribe(
      data => {
        console.log(data);
        if(data.length == 0) {
          alert('Usuario incorrecto');
        }
        else {
          this.router.navigate(['/sensores-app']);
        }

      },
      error => {
        console.error("Error al realizar el acceso");
      }
    )
  }


}
