import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputeLengthPage } from './compute-length';

@NgModule({
  declarations: [
    ComputeLengthPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputeLengthPage),
  ],
})
export class ComputeLengthPageModule {}
