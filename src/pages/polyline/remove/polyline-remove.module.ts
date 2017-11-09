import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolylineRemovePage } from './polyline-remove';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PolylineRemovePage,
  ],
  imports: [
    IonicPageModule.forChild(PolylineRemovePage),
    ComponentsModule
  ],
})
export class PolylineRemovePageModule {}
