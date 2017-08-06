import {Component, Input} from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  selector: 'virtual-dialog',
  templateUrl: 'virtual-dialog.html'
})
export class VirtualDialogComponent {
  @Input('message') message;
  visible = true;

  constructor(public viewCtrl: ViewController) {
  }

  onClick() {
    this.visible = false;
  }
}
