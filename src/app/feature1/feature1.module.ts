import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
// import { Comp1Component } from './comp1/comp1.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Feature1Component,
    // Comp1Component
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule,
    SharedModule
  ]
})
export class Feature1Module { }
