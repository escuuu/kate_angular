import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/classes/usuario';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
export class PaginaLoginComponent implements OnInit {
  public usuario : Usuario;
  hide = true;

  constructor(private apiService: ApiService, private router: Router ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  login(): void{
    this.apiService.login(this.usuario).subscribe(
      data => {
        console.log(data);
        if(data.length == 0){
          alert('Usuario incorrecto');
        }
        else {
          this.router.navigate(['/sensores-app']);
        }
      },
      error => {
        console.error("Error al realizar el acceso");
      }
    )
  }




}
