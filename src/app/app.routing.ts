/*Aca podremos toda la configuracion de las rutas del proyecto*/ 
//importamos los modulos o librerias del router de angular 
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Importamos los componentes
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideoJuegoComponent } from "./videojuego/videojuego.component";
import { HomeComponent } from "./home/home.component";
//Damos de altas todas las rutas con un Arrays rutas
//creamo una variable constante
const appRoutes: Routes=[
   // {path: '', component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'zapatillas', component:ZapatillasComponent},
    {path: 'videojuegos', component: VideoJuegoComponent},
    {path: 'videojuegos/:nombre', component: VideoJuegoComponent},
    //por ultimo cargamos la ruta 404 debe definirse siempre
    {path: '**', component:HomeComponent }
]
//Exportamos el modulo de router
export const appRoutingProviders: any[]=[];
export const routing = RouterModule.forRoot(appRoutes);
