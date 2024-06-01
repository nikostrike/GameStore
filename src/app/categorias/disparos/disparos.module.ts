import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisparosPageRoutingModule } from './disparos-routing.module';

import { DisparosPage } from './disparos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisparosPageRoutingModule
  ],
  declarations: [DisparosPage]
})
export class DisparosPageModule {}
