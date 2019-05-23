import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SliderComponent } from './layouts/slider/slider.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './layouts/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { WhatWeDoComponent } from './layouts/what-we-do/what-we-do.component';
import { WeWorkComponent } from './layouts/we-work/we-work.component';
import { CareerComponent } from './layouts/career/career.component';
import { OurWorkComponent } from './layouts/our-work/our-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WhatWeDoComponent,
    WeWorkComponent,
    CareerComponent,
    OurWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
