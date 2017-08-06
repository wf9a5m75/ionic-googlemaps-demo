import { NgModule } from '@angular/core';
import { VirtualDialogComponent } from './virtual-dialog/virtual-dialog';
import {CommonModule} from "@angular/common";
@NgModule({
	declarations: [VirtualDialogComponent],
	imports: [CommonModule],
	exports: [VirtualDialogComponent]
})
export class ComponentsModule {}
