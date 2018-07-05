import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaladsPage } from './salads';

@NgModule({
  declarations: [
    SaladsPage,
  ],
  imports: [
    IonicPageModule.forChild(SaladsPage),
  ],
})
export class SaladsPageModule {}
