import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiValorantPageRoutingModule } from './api-valorant-routing.module';

import { ApiValorantPage } from './api-valorant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiValorantPageRoutingModule
  ],
  declarations: [ApiValorantPage]
})
export class ApiValorantPageModule {}
