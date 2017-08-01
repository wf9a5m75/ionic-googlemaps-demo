import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetPositionPage } from './get-position';

@NgModule({
  declarations: [
    GetPositionPage,
  ],
  imports: [
    IonicPageModule.forChild(GetPositionPage),
  ],
})
export class GetPositionPageModule {}
