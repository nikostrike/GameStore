import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AventuraPage } from './aventura.page';

const routes: Routes = [
  {
    path: '',
    component: AventuraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AventuraPageRoutingModule {}
