import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowInfoWindowPage } from './show-info-window';

@NgModule({
  declarations: [
    ShowInfoWindowPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowInfoWindowPage),
  ],
})
export class ShowInfoWindowPageModule {}
