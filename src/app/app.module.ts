import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import {LoginPage} from '../pages/login/login';
import {RegistrationPage} from '../pages/registration/registration';
import { CategoriesPage } from '../pages/categories/categories';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SaladsPage } from '../pages/salads/salads';
import { MainPage} from '../pages/Main/Main';
import { FoodPage} from '../pages/food/food';
import { CartPage} from '../pages/cart/cart';
import {CustomFoodItemPage} from '../pages/custom-Food-Item/custom-Food-Item';
import {QuickOrderListPage} from '../pages/quick-order-list/quick-order-list';
import {MatListModule, MatSlideToggleModule,MatButtonModule, MatCardModule, MatTabsModule, MatChipsModule, MatIconModule,MatProgressSpinnerModule,MatInputModule } from "@angular/material";
import {HttpModule} from '@angular/http';
import {NgProgressModule} from 'ng2-progressbar';
import { FormsModule } from '@angular/forms';
import { HttpProvider } from '../providers/http/http';
import { HttpClientModule } from '@angular/common/http';

// import { TokenInterceptor } from '../providers/auth/token.interceptor';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    CategoriesPage,
    SaladsPage,
     MainPage,
     FoodPage,
     CartPage,
     CustomFoodItemPage,
     QuickOrderListPage

  ],
  
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSlideToggleModule,
    MatListModule,
    FormsModule,
    NgProgressModule,
   
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    CategoriesPage,
    SaladsPage,
    MainPage,
    FoodPage,
    CartPage,
    CustomFoodItemPage,
    QuickOrderListPage
    
    
  ],
  providers: [
    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    HttpProvider,
    // TokenInterceptor,
    // multi: true
  ]
})
export class AppModule {}
