import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);


  constructor( ) {

  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Email no válido' : '';
  }


}
