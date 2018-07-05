import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,Nav } from 'ionic-angular';
import {CategoriesPage} from '../../pages/categories/categories';
import { HttpProvider } from '../../providers/http/http';
import { FoodPage} from '../../pages/food/food';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  value:any;
  restById=[];
  dummydata={name:"abcd"};
  constructor(public http:HttpProvider,public navCrtl: NavController, public navParams: NavParams,public loadingCrtl: LoadingController,public nav:Nav) {
  
  this.value = navParams.get('id');
  this.dummydata.name=localStorage.getItem("restName");
    // console.log('val',this.value)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    
  }


  ionViewDidEnter(){
    this.http.getRestById().map(res=>res.json())
    .subscribe(
      res =>{

      // this.restById= data.data;
      this.dummydata=res.data;
      console.log(this.dummydata);

      
      }, 
    error =>{
      console.log(error);
    });
        
      }  


  presentLoading1() {
    this.loadingCrtl.create({
      content: 'Please wait...',
      duration: 5000,
      dismissOnPageChange: true
    }).present();
  }
  

  OpenCategoryPage() {
    
    this.nav.setRoot(CategoriesPage);
  }

  openFood(){

    this.nav.setRoot(FoodPage);
    
  }
}
