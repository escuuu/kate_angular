import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-registro',
  templateUrl: './pagina-registro.component.html',
  styleUrls: ['./pagina-registro.component.css']
})
export class PaginaRegistroComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    return this.email.hasError('email') ? 'Email no válido' : '';
  }

}
