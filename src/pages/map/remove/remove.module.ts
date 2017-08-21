import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemovePage } from './remove';

@NgModule({
  declarations: [
    RemovePage,
  ],
  imports: [
    IonicPageModule.forChild(RemovePage),
  ],
})
export class RemovePageModule {}
