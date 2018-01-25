import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputeAreaPage } from './compute-area';

@NgModule({
  declarations: [
    ComputeAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputeAreaPage),
  ],
})
export class ComputeAreaPageModule {}
