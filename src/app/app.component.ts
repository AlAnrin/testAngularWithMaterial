import { Component, Optional,  } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme = false;
  name = 'Ганнибал Лектор Кулинарович';
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' },
        { id: 8, name: 'child2' },
        { id: 9, name: 'child2' },
        { id: 10, name: 'child2' },
        { id: 11, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' },
            { id: 12, name: 'subsub' },
            { id: 13, name: 'subsub' },
            { id: 14, name: 'subsub' },
            { id: 15, name: 'subsub' },
            { id: 16, name: 'subsub' }
          ]
        }
      ]
    },
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' },
        { id: 8, name: 'child2' },
        { id: 9, name: 'child2' },
        { id: 10, name: 'child2' },
        { id: 11, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' },
            { id: 12, name: 'subsub' },
            { id: 13, name: 'subsub' },
            { id: 14, name: 'subsub' },
            { id: 15, name: 'subsub' },
            { id: 16, name: 'subsub' }
          ]
        }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' },
            { id: 12, name: 'subsub' },
            { id: 13, name: 'subsub' },
            { id: 14, name: 'subsub' },
            { id: 15, name: 'subsub' },
            { id: 16, name: 'subsub' }
          ]
        }
      ]
    }
  ];
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
