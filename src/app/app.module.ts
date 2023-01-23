import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartOneComponent } from './chart-one/chart-one.component';
import {ChartModule} from 'primeng/chart'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { RippleModule } from "primeng/ripple";
import { ImageModule } from "primeng/image";
import { RoundComponent } from './round/round.component';
import { PolarCHartComponent } from './polar-chart/polar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartOneComponent,
    RoundComponent,
    PolarCHartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    BrowserAnimationsModule,
        ToastModule,
        ButtonModule,
        RippleModule,
        FormsModule,
        ImageModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
