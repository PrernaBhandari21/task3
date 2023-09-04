import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Feature3Component } from './feature3.component';
// import { Comp3Component } from './comp3/comp3.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Feature3Component,
    // Comp3Component
  ],
  imports: [
    CommonModule,
    Feature3RoutingModule,

    SharedModule
  ]
})
export class Feature3Module { }
