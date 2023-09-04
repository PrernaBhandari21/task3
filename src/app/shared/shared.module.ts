import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from '../feature1/comp1/comp1.component';
import { Comp2Component } from '../feature2/comp2/comp2.component';
import { Comp3Component } from '../feature3/comp3/comp3.component';


@NgModule({
  declarations: [Comp1Component],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
