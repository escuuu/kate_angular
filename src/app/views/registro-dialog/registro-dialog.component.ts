import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registro-dialog',
  templateUrl: './registro-dialog.component.html',
  styleUrls: ['./registro-dialog.component.css']
})
export class RegistroDialogComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Email no válido' : '';
  }

  comparePassword() {
    
  }
}
