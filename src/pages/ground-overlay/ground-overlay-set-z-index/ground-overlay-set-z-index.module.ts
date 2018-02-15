import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroundOverlaySetZIndexPage } from './ground-overlay-set-z-index';
import { ComponentsModule } from '../../../components/components.module';
@NgModule({
  declarations: [
    GroundOverlaySetZIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(GroundOverlaySetZIndexPage),
    ComponentsModule,
  ],
})
export class GroundOverlaySetZIndexPageModule {}
