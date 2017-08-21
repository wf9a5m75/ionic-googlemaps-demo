import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClearPage } from './clear';

@NgModule({
  declarations: [
    ClearPage,
  ],
  imports: [
    IonicPageModule.forChild(ClearPage),
  ],
})
export class ClearPageModule {}
