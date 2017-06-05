import {Attribute} from '@angular/core';
export class course {
  format: string;
  id: number;
  name: string;
  fullName: string;
  academHours: number;
  description: string;
  children: Array<course>;
  expanded: boolean;
  checked: boolean;
  dateCreate: Date;
  dateChange: Date;

  constructor(@Attribute('format') format, id: number, name: string, children: Array<course>,
              fullName: string, academHours: number, description: string, dateCreate: Date, dateChange: Date) {
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
    this.format = format;
  }
  click() {
    this.checked = !this.checked;
  }
  dblClick() {
    this.expanded = !this.expanded;
  }
}
