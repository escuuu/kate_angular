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



@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  // show = false;

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
