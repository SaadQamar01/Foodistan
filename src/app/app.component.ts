import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CategoriesPage } from '../pages/categories/categories';
import { RegistrationPage } from '../pages/registration/registration';
import {QuickOrderListPage} from '../pages/quick-order-list/quick-order-list';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ icon: string, title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthProvider, public loadingCrtl: LoadingController) {
    this.initializeApp();

    var token = window.localStorage.getItem("token");

    // used for an example of ngFor and navigation{
    this.pages = [
      { icon: 'restaurant', title: 'Back To Restaurant', component: HomePage },
      { icon: 'list', title: 'Quick Order List', component: QuickOrderListPage },

    ];
    //  For Authentication.....

    if (this.auth.isLogged() === true) {
      this.rootPage = HomePage;
    }
    else {
      this.rootPage = LoginPage;
    }


  }
  presentLoading() {
    this.loadingCrtl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}





