import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'categorias/deportes',
    loadChildren: () => import('./categorias/deportes/deportes.module').then(m => m.DeportesPageModule)
  },
  {
    path: 'categorias/rpg',
    loadChildren: () => import('./categorias/rpg/rpg.module').then(m => m.RPGPageModule)
  },
  {
    path: 'categorias/disparos',
    loadChildren: () => import('./categorias/disparos/disparos.module').then(m => m.DisparosPageModule)
  },
  {
    path: 'categorias/aventura',
    loadChildren: () => import('./categorias/aventura/aventura.module').then(m => m.AventuraPageModule)
  },
  {
    path: 'categorias/carreras',
    loadChildren: () => import('./categorias/carreras/carreras.module').then(m => m.CarrerasPageModule)
  },
  {
    path: 'categorias/arcade',
    loadChildren: () => import('./categorias/arcade/arcade.module').then(m => m.ArcadePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'api-valorant',
    loadChildren: () => import('./api-valorant/api-valorant.module').then( m => m.ApiValorantPageModule)
  },  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
