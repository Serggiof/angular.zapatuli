import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoJuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { routing, appRoutingProviders} from './app.routing'

import { Configuracion } from './modelos/configuration';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

/*Objetos de modulo*/
@NgModule({
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  //y el appRouting como es un servicio lo cargamos los providers
  // nos ayuda a usar el router en otros componentes
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }