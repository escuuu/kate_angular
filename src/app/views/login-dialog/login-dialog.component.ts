import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistroDialogComponent } from '../registro-dialog/registro-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}


  getErrorMessage() {
    return this.email.hasError('email') ? 'Email no válido' : '';
  }

  openRegisterDialog() {
    this.dialog.open(RegistroDialogComponent, {
      height: '600px',
      width: '450px'
    });
  }


}
