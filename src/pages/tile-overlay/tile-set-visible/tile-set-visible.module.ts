import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TileSetVisiblePage } from './tile-set-visible';

@NgModule({
  declarations: [
    TileSetVisiblePage,
  ],
  imports: [
    IonicPageModule.forChild(TileSetVisiblePage),
  ],
})
export class TileSetVisiblePageModule {}
