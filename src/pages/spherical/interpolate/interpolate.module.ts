import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterpolatePage } from './interpolate';

@NgModule({
  declarations: [
    InterpolatePage,
  ],
  imports: [
    IonicPageModule.forChild(InterpolatePage),
  ],
})
export class InterpolatePageModule {}
