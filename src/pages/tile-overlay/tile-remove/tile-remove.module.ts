import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TileRemovePage } from './tile-remove';

@NgModule({
  declarations: [
    TileRemovePage,
  ],
  imports: [
    IonicPageModule.forChild(TileRemovePage),
  ],
})
export class TileRemovePageModule {}
