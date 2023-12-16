import { ConfimationMessage } from './../typings/platform-typings';
import { CustomDialogBoxComponent } from './../components/custom-dialog-box/custom-dialog-box.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingletonService {
  onTextEditorEntered$: BehaviorSubject<string> = new BehaviorSubject('');
  confimationMessage: ConfimationMessage | undefined;


  constructor(private dialog: MatDialog) {}


  onDisplayConfimationDialoag(confimationMessage: ConfimationMessage) {
    this.confimationMessage = confimationMessage;
    return this.dialog.open(CustomDialogBoxComponent, {
      disableClose: true,
      minWidth: 300
    }).afterClosed();
  }
}
