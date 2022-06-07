import { Router } from '@angular/router';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog, private router :  Router) { }

  ngOnInit(): void {
  }

  openLoginDialog(){
    this.dialog.open(LoginDialogComponent, {
      height: '600px',
      width: '450px'
    });
  }

}


