import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanByPage } from './pan-by';

@NgModule({
  declarations: [
    PanByPage,
  ],
  imports: [
    IonicPageModule.forChild(PanByPage),
  ],
})
export class PanByPageModule {}
