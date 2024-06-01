import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'deportes',
    loadChildren: () => import('./categorias/deportes/deportes.module').then( m => m.DeportesPageModule)
  },
  {
    path: 'rpg',
    loadChildren: () => import('./categorias/rpg/rpg.module').then( m => m.RPGPageModule)
  },
  {
    path: 'disparos',
    loadChildren: () => import('./categorias/disparos/disparos.module').then( m => m.DisparosPageModule)
  },
  {
    path: 'aventura',
    loadChildren: () => import('./categorias/aventura/aventura.module').then( m => m.AventuraPageModule)
  },
  {
    path: 'carreras',
    loadChildren: () => import('./categorias/carreras/carreras.module').then( m => m.CarrerasPageModule)
  },
  {
    path: 'arcade',
    loadChildren: () => import('./categorias/arcade/arcade.module').then( m => m.ArcadePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
