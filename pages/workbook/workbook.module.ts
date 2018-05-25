import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkbookPage } from './workbook';

@NgModule({
  declarations: [
    WorkbookPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkbookPage),
  ],
})
export class WorkbookPageModule {}
