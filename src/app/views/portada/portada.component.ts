import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import * as Aos from 'aos';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(public dialog: MatDialog, titulo: Title) {
    titulo.setTitle('Sani-Ki Konnect');
  }

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
