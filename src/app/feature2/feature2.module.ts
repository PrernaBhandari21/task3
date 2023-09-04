import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Feature2Component } from './feature2.component';
// import { Comp2Component } from './comp2/comp2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    Feature2Component,
    // Comp2Component
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule,
    SharedModule
  ]
})
export class Feature2Module { }
