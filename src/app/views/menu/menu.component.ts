import { Router, NavigationEnd } from '@angular/router';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dialog: MatDialog, private router :  Router) { }

  public myClass: boolean = false;
  public myClass2: boolean = true;
  public myClass3: boolean = true;

  ngOnInit(): void {
  }

  openLoginDialog(){
    this.dialog.open(LoginDialogComponent, {
      height: '600px',
      width: '450px'
    });
  }

  colorido() {
    this.router.events.subscribe(
      () => {
        if(this.router.url == '/inicio'){
          this.myClass = false;
        }
        else {
          this.myClass = true;
        }
        if(this.router.url == '/calidad-aire'){
          this.myClass2 = false;
        }
        else {
          this.myClass2 = true;
        }
        if(this.router.url == '/ubicanos'){
          this.myClass3 = false;
        }
        else {
          this.myClass3 = true;
        }
      }
      );
  }


}


