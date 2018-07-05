import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomFoodItemPage } from './custom-food-item';

@NgModule({
  declarations: [
    CustomFoodItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomFoodItemPage),
  ],
})
export class CustomFoodItemPageModule {}
