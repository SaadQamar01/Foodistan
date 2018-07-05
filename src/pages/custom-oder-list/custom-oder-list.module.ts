import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomOderListPage } from './custom-oder-list';

@NgModule({
  declarations: [
    CustomOderListPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomOderListPage),
  ],
})
export class CustomOderListPageModule {}
