import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TileSetFadeInPage } from './tile-set-fade-in';

@NgModule({
  declarations: [
    TileSetFadeInPage,
  ],
  imports: [
    IonicPageModule.forChild(TileSetFadeInPage),
  ],
})
export class TileSetFadeInPageModule {}
