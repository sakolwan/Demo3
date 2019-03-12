import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PutProductPage } from './put-product';

@NgModule({
  declarations: [
    PutProductPage,
  ],
  imports: [
    IonicPageModule.forChild(PutProductPage),
  ],
})
export class PutProductPageModule {}
