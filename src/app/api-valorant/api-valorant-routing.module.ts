import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiValorantPage } from './api-valorant.page';

const routes: Routes = [
  {
    path: '',
    component: ApiValorantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiValorantPageRoutingModule {}
