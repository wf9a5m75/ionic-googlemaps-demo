import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecodePathPage } from './decode-path';

@NgModule({
  declarations: [
    DecodePathPage,
  ],
  imports: [
    IonicPageModule.forChild(DecodePathPage),
  ],
})
export class DecodePathPageModule {}
