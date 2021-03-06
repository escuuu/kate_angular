import { NgModule } from '@angular/core';

//MATERIALES
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

//COMPONENTES
import { AppComponent } from './app.component';
import { MenuComponent } from './views/menu/menu.component';
import { PortadaComponent } from './views/portada/portada.component';
import { ProductoComponent } from './views/portada/producto/producto.component';
import { FuncionalidadComponent } from './views/portada/funcionalidad/funcionalidad.component';
import { AppRoutingModule } from './app-routing.module';
import { CalidadDelAireComponent } from './views/calidad-del-aire/calidad-del-aire.component';
import { BeneficiosComponent } from './views/calidad-del-aire/beneficios/beneficios.component';
import { LoginDialogComponent } from './views/login-dialog/login-dialog.component';
import { MaterialModule } from './material/material.module';
import { RegistroDialogComponent } from './views/registro-dialog/registro-dialog.component';
import { PaginaMapaComponent } from './views/pagina-mapa/pagina-mapa.component';
import { PaginaLoginComponent } from './views/pagina-login/pagina-login.component';
import { PaginaRegistroComponent } from './views/pagina-registro/pagina-registro.component';
import { MatInputModule } from '@angular/material/input';
import { MenuAppComponent } from './views/pagina-app/menu-app/menu-app.component';
import { MapsAppComponent } from './views/pagina-app/maps-app/maps-app.component';
import { ListaSensoresComponent } from './views/pagina-app/lista-sensores/lista-sensores.component';
import { EditarSensorComponent } from './views/pagina-app/lista-sensores/editar-sensor/editar-sensor.component';
import { PaginaAppComponent } from './views/pagina-app/pagina-app.component';


//SERVICIOS
import { ApiService } from './shared/services/api.service';



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
    PaginaLoginComponent,
    PaginaRegistroComponent,
    PaginaAppComponent,
    MapsAppComponent,
    ListaSensoresComponent,
    EditarSensorComponent,
    MenuAppComponent
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule
  ],

  providers: [
    ApiService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
