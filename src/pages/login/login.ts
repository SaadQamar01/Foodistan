import { Component } from '@angular/core';
import { IonicPage, NavController,Nav, NavParams,AlertController,ToastController,LoadingController  } from 'ionic-angular';
import {RegistrationPage} from '../registration/registration';
import { HomePage } from '../home/home';
import { AuthProvider } from '../../providers/auth/auth';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
hide=true;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public nav:Nav ,private auth:AuthProvider,public altCrtl:AlertController,public toastcontrl:ToastController,public loadingCrtl:LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  
  openSignupPage(){
    this.nav.setRoot(RegistrationPage);
  }

  presentLoading() {
    this.loadingCrtl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }


  login_process(FormLogin){

    this.auth.login(FormLogin.value).subscribe(data=>{
      

      

      if(data.success==true){

         this.navCtrl.setRoot(HomePage);

          let LoginToast=this.toastcontrl.create({

            message:" Congrate Log in Successfully ! ",
            duration:3000 ,
            position:'middle'
          });


          LoginToast.present();
        }
        
      
        else{

          FormLogin.password='';
        
          let alert=this.altCrtl.create({

            title:'Login Failed',
            subTitle:data.message,
            buttons:['Ok']
          })

          alert.present();

          let LoginToast=this.toastcontrl.create({
            
                        message:" Sorry Log in  UnSuccessfully ! ",
                        duration:3000,
                        position:'middle'
                      });

          LoginToast.present();

        }

    });

  }

}
