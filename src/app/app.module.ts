import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from './db.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule,
            BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            HttpClientModule],
  providers: [{ provide: RouteReuseStrategy,
                useClass: IonicRouteStrategy }, SQLite, DbService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
