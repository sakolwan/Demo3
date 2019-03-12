import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoManagePage } from './info-manage';

@NgModule({
  declarations: [
    InfoManagePage,
  ],
  imports: [
    IonicPageModule.forChild(InfoManagePage),
  ],
})
export class InfoManagePageModule {}
