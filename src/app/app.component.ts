import { Component, Optional,  } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {course} from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme = false;
  name = 'Ганнибал Лектор Кулинарович';
  utkbis1 = new course('dd:mm:yy h:mm:ss', 2, 'УТК-БИС1', [
    new course('dd:mm:yy h:mm:ss', 4, '1', [], '', 40, '', new Date(), new Date()),
    new course('dd:mm:yy h:mm:ss', 5, '2', [], '', 40, '', new Date(), new Date())], 'Учебно тренировочные комплексы', 40, 'бла-бла-утк', new Date(), new Date());
  utkbis2 = new course('dd:mm:yy h:mm:ss', 3, 'УТК-БИС2', [
    new course('dd:mm:yy h:mm:ss', 6, '3', [], '', 40, '', new Date(), new Date()),
    new course('dd:mm:yy h:mm:ss', 7, '4', [], '', 40, '', new Date(), new Date()),
    new course('dd:mm:yy h:mm:ss', 8, '5', [], '', 40, '', new Date(), new Date())], '', 40, '', new Date(), new Date());
  utk = new course('dd:mm:yy h:mm:ss', 1, 'УТК', [this.utkbis1, this.utkbis2], '', 40, '', new Date(), new Date());
  nodes = [this.utk];
  selectCourse = this.utkbis1;
}


@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContentComponent {
  constructor( @Optional() public dialogRef: MdDialogRef<DialogContentComponent>) { }
}
