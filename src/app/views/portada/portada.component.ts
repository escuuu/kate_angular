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



@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
  // animations: [
  //   trigger( 'popOverState', [
  //     state('show', style({
  //       opacity: 1
  //     })),
  //     state('hide', style({
  //       opacity: 0
  //     })),
  //     transition('show => hide', animate('600ms ease-out')),
  //     transition('hide => show', animate('1000ms ease-in'))
  //   ])
  // ]
})
export class PortadaComponent implements OnInit {
  // show = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.show = !this.show;
  }

  // get stateName() {
  //   return this.show ? 'show' : 'hide'
  // }

    openLoginDialog() {
      this.dialog.open(LoginDialogComponent, {
        height: '600px',
        width: '450px'
      })
    }
}
