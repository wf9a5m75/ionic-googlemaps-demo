import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarkerGetPositionPage } from './getposition';

@NgModule({
  declarations: [
    MarkerGetPositionPage,
  ],
  imports: [
    IonicPageModule.forChild(MarkerGetPositionPage),
  ],
})
export class MarkerGetPositionPageModule {}
