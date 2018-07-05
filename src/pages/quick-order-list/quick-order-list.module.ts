import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickOrderListPage } from './quick-order-list';

@NgModule({
  declarations: [
    QuickOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickOrderListPage),
  ],
})
export class QuickOrderListPageModule {}
