import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetSnippetPage } from './set-snippet';

@NgModule({
  declarations: [
    SetSnippetPage,
  ],
  imports: [
    IonicPageModule.forChild(SetSnippetPage),
  ],
})
export class SetSnippetPageModule {}
