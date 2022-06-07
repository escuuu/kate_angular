import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-pagina-app',
  templateUrl: './pagina-app.component.html',
  styleUrls: ['./pagina-app.component.css']
})
export class PaginaAppComponent implements OnInit {

  constructor(private apiService: ApiService){
  }

  ngOnInit(): void {
    this.apiService.disparadorUsuario.subscribe(
      data => {
        console.log('Recibiendo data...', data);
      }
    )

  }

}
