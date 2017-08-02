import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HideInfoWindowPage } from './hide-info-window';

@NgModule({
  declarations: [
    HideInfoWindowPage,
  ],
  imports: [
    IonicPageModule.forChild(HideInfoWindowPage),
  ],
})
export class HideInfoWindowPageModule {}
