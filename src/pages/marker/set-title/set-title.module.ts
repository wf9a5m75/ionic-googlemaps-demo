import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetTitlePage } from './set-title';

@NgModule({
  declarations: [
    SetTitlePage,
  ],
  imports: [
    IonicPageModule.forChild(SetTitlePage),
  ],
})
export class SetTitlePageModule {}
