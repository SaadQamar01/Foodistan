import { Component } from '@angular/core';
import { NavController ,Nav,ToastController,LoadingController} from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
 import {MainPage} from '../../pages/Main/Main';
import { AuthProvider } from '../../providers/auth/auth';
import {LoginPage} from '../../pages/login/login';
import { HttpProvider } from '../../providers/http/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  showId;
restArray=[];
  color = 'primary';
  mode = 'determinate';
  value = 50;

 images:any=[];
  constructor(public navCtrl: NavController , public nav:Nav,private auth:AuthProvider,public toastcontrl:ToastController,public loadingCrtl:LoadingController,private http:HttpProvider) {
    this.images=[{'image':'../assets/homecontent/slide1.jpg'},
    {'image':'../assets/homecontent/slide2.jpg'},
    {'image':'../assets/homecontent/slide3.png'},
    {'image':'../assets/homecontent/slide4.png'},
    {'image':'../assets/homecontent/slide5.jpg'},
    
    
    
    
  
  ]
  }


  openCategoriesPage(id){
    
    this.nav.setRoot(CategoriesPage);
    
  }
  openMainPage(id,name){

    // this.nav.setRoot(MainPage,{id:'12'});

    console.log(id);
    localStorage.setItem('restId',id);
    localStorage.setItem('restName',name);
    this.nav.setRoot(MainPage);
  
  }

  presentLoading() {
    this.loadingCrtl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }

  log_out(){

    this.auth.logout();

    this.nav.setRoot(LoginPage);

    let LoginToast=this.toastcontrl.create({
      
                  message:" User is  Logged out Successfully ! ",
                  duration:3000,
                  position:'middle'
                });
      
                LoginToast.present();

  }

  ionViewDidEnter(){
    
        this.http.getAllRestaurant()
        .subscribe(
          res =>{
          this.restArray= res.data;
          console.log(this.restArray);
    
         
        }, 
      error =>{
        console.log(error);
      })
      }  



     

}
