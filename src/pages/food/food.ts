import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,Nav} from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import{MainPage} from '../../pages/Main/Main';
import{CategoriesPage} from '../../pages/categories/categories';
import{CartPage} from '../../pages/cart/cart';
import {CustomFoodItemPage} from '../../pages/custom-Food-Item/custom-Food-Item';
/**
 * Generated class for the FoodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class FoodPage {
  foodArray=[];
  constructor(public nav:Nav,public http:HttpProvider,public navCtrl: NavController, public navParams: NavParams,public loadingCrtl:LoadingController) {
  }
  dummydata1:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');
    let category = localStorage.getItem("category");
    
    this.dummydata1 = JSON.parse(category);
    let catid=this.dummydata1._id;
    console.log("Category Id",catid);
    
    localStorage.setItem('catId',catid);
  }

openQO(name,price,id){

  console.log(name,price,id);

  localStorage.setItem('foodName',name);
  localStorage.setItem('foodPrice',price);
  localStorage.setItem('foodId',id);

  this.nav.setRoot(CartPage);
}

openCO(name,price,id){

  console.log("Food Id",id);
  localStorage.setItem('foodNames',name);
  localStorage.setItem('foodPrices',price);
  localStorage.setItem('foodId',id);

  this.nav.setRoot(CustomFoodItemPage);
}

  ionViewDidEnter(){
    
        this.http.getAllFoodResByCatId()
        .subscribe(
          res =>{
          this.foodArray= res.data;
          console.log(this.foodArray);
    
         
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
  openFoodPage(){
    
  }

  returnMainPage(){
    this.nav.setRoot(CategoriesPage);
    
  }

}
