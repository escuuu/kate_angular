import { PaginaAppComponent } from './views/pagina-app/pagina-app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalidadDelAireComponent } from './views/calidad-del-aire/calidad-del-aire.component';
import { PaginaLoginComponent } from './views/pagina-login/pagina-login.component';
import { PaginaMapaComponent } from './views/pagina-mapa/pagina-mapa.component';
import { PaginaRegistroComponent } from './views/pagina-registro/pagina-registro.component';
import { PortadaComponent } from './views/portada/portada.component';
import { MapsAppComponent } from './views/maps-app/maps-app.component';

const routes: Routes = [
  { path: 'inicio', component: PortadaComponent },
  { path: 'calidad-aire', component: CalidadDelAireComponent },
  { path: 'ubicanos', component: PaginaMapaComponent },
  { path: 'iniciar-sesion', component: PaginaLoginComponent },
  { path: 'registro', component: PaginaRegistroComponent },
  { path: 'sensores-app', component: PaginaAppComponent },
  { path: 'maps', component: MapsAppComponent },

  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes,  { scrollPositionRestoration: 'enabled' })]

})
export class AppRoutingModule { }
