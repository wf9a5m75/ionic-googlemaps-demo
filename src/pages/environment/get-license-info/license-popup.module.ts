import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LicensePopupPage } from './license-popup';

@NgModule({
  declarations: [
    LicensePopupPage,
  ],
  imports: [
    IonicPageModule.forChild(LicensePopupPage),
  ],
})
export class LicensePopupPageModule {}
