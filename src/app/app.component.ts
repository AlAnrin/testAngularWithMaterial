import { Component, Optional,  } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import {course} from './course';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping } from 'angular-tree-component';

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event)
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme = false;
  name = 'Ганнибал Лектор Кулинарович';
  utkbis1 = new course(2, 'УТК-БИС1', [
    new course(4, '1', [], '', 40, '', new Date().toLocaleString(), new Date().toLocaleString()),
    new course(5, '2', [], '', 40, '', new Date().toLocaleString(), new Date().toLocaleString())],
    'Учебно тренировочные комплексы', 40, 'бла-бла-утк', new Date().toLocaleString(), new Date().toLocaleString());
  utkbis2 = new course(3, 'УТК-БИС2', [
    new course(6, '3', [], '', 40, '', new Date().toLocaleString(), new Date().toLocaleString()),
    new course(7, '4', [], '', 40, '', new Date().toLocaleString(), new Date().toLocaleString()),
    new course(8, '5', [], '', 40, '', new Date().toLocaleString(), new Date().toLocaleString())],
    '', 40, '', new Date().toLocaleString(), new Date().toLocaleString());
  utk = new course(1, 'УТК', [this.utkbis1, this.utkbis2], '', 40, '', new Date().toLocaleString(), new Date().toLocaleString());
  nodes = [this.utk];
  selectCourse = this.utkbis1;
  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
  }
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
