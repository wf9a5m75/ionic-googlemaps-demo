import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContainsLocationPage } from './contains-location';

@NgModule({
  declarations: [
    ContainsLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ContainsLocationPage),
  ],
})
export class ContainsLocationPageModule {}
