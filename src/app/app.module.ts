import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { TreeModule } from 'angular-tree-component';
import { AppComponent, DialogContentComponent } from './app.component';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    TreeModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  declarations: [AppComponent, DialogContentComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
