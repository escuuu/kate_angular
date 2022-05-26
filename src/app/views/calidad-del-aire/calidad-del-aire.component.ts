import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Aos from 'aos';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-calidad-del-aire',
  templateUrl: './calidad-del-aire.component.html',
  styleUrls: ['./calidad-del-aire.component.css']
})
export class CalidadDelAireComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    Aos.init();
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent, {
      height: '600px',
      width: '450px'
    })
  }
}
