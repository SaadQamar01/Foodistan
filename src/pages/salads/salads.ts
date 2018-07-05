import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Nav,LoadingController} from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the SaladsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-salads',
  templateUrl: 'salads.html',
})
export class SaladsPage {
  subCatArray=[];

  constructor(public http:HttpProvider,public navCtrl: NavController, public navParams: NavParams, public nav:Nav,public loadingCrtl:LoadingController) {
  
   
  
  }

  


  ionViewDidLoad() {
    console.log('ionViewDidLoad SaladsPage');
  }


  ionViewDidEnter(){
    
        this.http.getCatByRestId()
        .subscribe(
          res =>{
          this.subCatArray= res.data;
          console.log(this.subCatArray);
    
         
        }, 
      error =>{
        console.log(error);
      })
      }  

  presentLoading() {
    this.loadingCrtl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }


  returnCategories(){

    this.nav.setRoot(CategoriesPage);
 
  }






}
