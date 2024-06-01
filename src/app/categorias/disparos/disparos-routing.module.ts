import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisparosPage } from './disparos.page';

const routes: Routes = [
  {
    path: '',
    component: DisparosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisparosPageRoutingModule {}
