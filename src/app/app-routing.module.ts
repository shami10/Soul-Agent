import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './layouts/home/home.component';
import { AboutComponent } from './layouts/about/about.component';
import { WhatWeDoComponent } from './layouts/what-we-do/what-we-do.component';
import { WeWorkComponent } from './layouts/we-work/we-work.component';
import { CareerComponent } from './layouts/career/career.component';
import { OurWorkComponent } from './layouts/our-work/our-work.component';
import { ProjectFormComponent } from './layouts/project-form/project-form.component';
import { CareerFormComponent } from './layouts/career-form/career-form.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'we-work-with', component: WeWorkComponent},
  {path: 'what-we-do', component: WhatWeDoComponent},
  {path: 'career', component: CareerComponent},
  {path: 'our-work', component: OurWorkComponent},
  {path: 'contact-us', component: ProjectFormComponent},
  {path: 'apply-now', component: CareerFormComponent},
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
