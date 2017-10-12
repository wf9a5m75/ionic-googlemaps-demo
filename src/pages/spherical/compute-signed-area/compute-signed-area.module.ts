import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputeSignedAreaPage } from './compute-signed-area';

@NgModule({
  declarations: [
    ComputeSignedAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputeSignedAreaPage),
  ],
})
export class ComputeSignedAreaPageModule {}
