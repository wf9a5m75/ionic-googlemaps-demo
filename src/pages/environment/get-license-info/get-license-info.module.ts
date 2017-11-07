import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetLicenseInfoPage } from './get-license-info';

@NgModule({
  declarations: [
    GetLicenseInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GetLicenseInfoPage),
  ],
})
export class GetLicenseInfoPageModule {}
