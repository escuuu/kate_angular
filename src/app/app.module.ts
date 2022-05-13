import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import {PortadaComponent} from './views/portada/portada.component';
import {ProductoComponent} from './views/portada/producto/producto.component';
import {FuncionalidadComponent} from './views/portada/funcionalidad/funcionalidad.component';
import { AppRoutingModule } from './app-routing.module';
import { CalidadDelAireComponent } from './views/calidad-del-aire/calidad-del-aire.component';
import { BeneficiosComponent } from './views/calidad-del-aire/beneficios/beneficios.component';
import { LoginDialogComponent } from './views/login-dialog/login-dialog.component';
import { MaterialModule } from './material/material.module';
import { RegistroDialogComponent } from './views/registro-dialog/registro-dialog.component';
import { PaginaMapaComponent } from './views/pagina-mapa/pagina-mapa.component';
import { PaginaLoginComponent } from './views/pagina-login/pagina-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PortadaComponent,
    ProductoComponent,
    FuncionalidadComponent,
    CalidadDelAireComponent,
    BeneficiosComponent,
    LoginDialogComponent,
    RegistroDialogComponent,
    PaginaMapaComponent,
    PaginaLoginComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatDialogModule,
    AppRoutingModule,
    MatFormFieldModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
