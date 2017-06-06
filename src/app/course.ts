import {Attribute} from '@angular/core';
export class course {
  id: number;
  name: string;
  fullName: string;
  academHours: number;
  description: string;
  children: Array<course>;
  expanded: boolean;
  checked: boolean;
  dateCreate: string;
  dateChange: string;

  constructor(id: number, name: string, children: Array<course>,
              fullName: string, academHours: number, description: string, dateCreate: string, dateChange: string) {
    this.id = id;
    this.name = name;
    this.children = children;
    this.fullName = fullName;
    this.academHours = academHours;
    this.description = description;
    this.expanded = false;
    this.checked = false;
    this.dateCreate = dateCreate;
    this.dateChange = dateChange;
  }
  click() {
    this.checked = !this.checked;
  }
  dblClick() {
    this.expanded = !this.expanded;
  }
}
